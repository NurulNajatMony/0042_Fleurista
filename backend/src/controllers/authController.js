const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../config/db');

const ACCESS_SECRET = process.env.JWT_ACCESS_SECRET || 'fleurista_access_secret_key_0042_2026';
const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'fleurista_refresh_secret_key_0042_2026';
const ACCESS_EXPIRES = process.env.JWT_ACCESS_EXPIRES_IN || '1h';
const REFRESH_EXPIRES = process.env.JWT_REFRESH_EXPIRES_IN || '7d';

function generateTokens(user) {
    const payload = {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
    };
    const accessToken = jwt.sign(payload, ACCESS_SECRET, { expiresIn: ACCESS_EXPIRES });
    const refreshToken = jwt.sign({ id: user.id }, REFRESH_SECRET, { expiresIn: REFRESH_EXPIRES });
    return { accessToken, refreshToken };
}

exports.register = async (req, res) => {
    try {
        const { name, email, password, phone } = req.body;

        if (!name || !email || !password || !phone) {
            return res.status(400).json({
                status: 'error',
                message: 'Nama, email, nomor telepon, dan password wajib diisi.'
            });
        }

        if (password.length < 6) {
            return res.status(400).json({
                status: 'error',
                message: 'Password minimal harus terdiri dari 6 karakter.'
            });
        }

        const [existing] = await pool.query('SELECT id FROM users WHERE email = ?', [email]);
        if (existing.length > 0) {
            return res.status(409).json({
                status: 'error',
                message: 'Email sudah terdaftar. Silakan gunakan email lain atau login.'
            });
        }

        const passwordHash = await bcrypt.hash(password, 10);
        const [result] = await pool.query(
            'INSERT INTO users (name, email, password_hash, phone, role) VALUES (?, ?, ?, ?, ?)',
            [name.trim(), email.trim().toLowerCase(), passwordHash, phone.trim(), 'customer']
        );

        return res.status(201).json({
            status: 'success',
            message: 'Registrasi akun Pelanggan berhasil.',
            data: {
                id: result.insertId,
                name: name.trim(),
                email: email.trim().toLowerCase(),
                phone: phone.trim(),
                role: 'customer'
            }
        });
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: 'Terjadi kesalahan pada server saat registrasi.',
            detail: error.message
        });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                status: 'error',
                message: 'Email dan password wajib diisi.'
            });
        }

        const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email.trim().toLowerCase()]);
        if (rows.length === 0) {
            return res.status(401).json({
                status: 'error',
                message: 'Email atau password tidak sesuai.'
            });
        }

        const user = rows[0];
        const isMatch = await bcrypt.compare(password, user.password_hash);
        if (!isMatch) {
            return res.status(401).json({
                status: 'error',
                message: 'Email atau password tidak sesuai.'
            });
        }

        const { accessToken, refreshToken } = generateTokens(user);
        await pool.query('UPDATE users SET refresh_token = ? WHERE id = ?', [refreshToken, user.id]);

        return res.json({
            status: 'success',
            message: 'Login berhasil.',
            data: {
                access_token: accessToken,
                refresh_token: refreshToken,
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    phone: user.phone,
                    role: user.role
                }
            }
        });
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: 'Terjadi kesalahan pada server saat login.',
            detail: error.message
        });
    }
};

exports.refreshToken = async (req, res) => {
    try {
        const { refresh_token } = req.body;
        if (!refresh_token) {
            return res.status(400).json({
                status: 'error',
                message: 'Refresh token wajib disertakan.'
            });
        }

        const [rows] = await pool.query('SELECT * FROM users WHERE refresh_token = ?', [refresh_token]);
        if (rows.length === 0) {
            return res.status(403).json({
                status: 'error',
                message: 'Refresh token tidak ditemukan atau sudah dicabut.'
            });
        }

        const user = rows[0];
        jwt.verify(refresh_token, REFRESH_SECRET, async (err) => {
            if (err) {
                return res.status(403).json({
                    status: 'error',
                    message: 'Refresh token tidak valid atau telah kedaluwarsa.'
                });
            }

            const { accessToken, refreshToken: newRefreshToken } = generateTokens(user);
            await pool.query('UPDATE users SET refresh_token = ? WHERE id = ?', [newRefreshToken, user.id]);

            return res.json({
                status: 'success',
                message: 'Token berhasil diperbarui.',
                data: {
                    access_token: accessToken,
                    refresh_token: newRefreshToken
                }
            });
        });
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: 'Gagal memperbarui token.',
            detail: error.message
        });
    }
};

exports.logout = async (req, res) => {
    try {
        await pool.query('UPDATE users SET refresh_token = NULL WHERE id = ?', [req.user.id]);
        return res.json({
            status: 'success',
            message: 'Logout berhasil dan sesi telah dihapus.'
        });
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: 'Gagal melakukan logout.',
            detail: error.message
        });
    }
};

exports.getProfile = async (req, res) => {
    try {
        const [rows] = await pool.query(
            'SELECT id, name, email, phone, role, created_at FROM users WHERE id = ?',
            [req.user.id]
        );
        if (rows.length === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'Data pengguna tidak ditemukan.'
            });
        }
        return res.json({
            status: 'success',
            data: rows[0]
        });
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: 'Gagal memuat profil pengguna.',
            detail: error.message
        });
    }
};
