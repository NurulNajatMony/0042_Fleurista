const jwt = require('jsonwebtoken');

const ACCESS_SECRET = process.env.JWT_ACCESS_SECRET || 'fleurista_access_secret_key_0042_2026';

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({
            status: 'error',
            message: 'Akses ditolak: Access Token tidak ditemukan.'
        });
    }

    jwt.verify(token, ACCESS_SECRET, (err, decodedUser) => {
        if (err) {
            return res.status(401).json({
                status: 'error',
                message: 'Access Token tidak valid atau telah kedaluwarsa.'
            });
        }
        req.user = decodedUser;
        next();
    });
}

function authorizeRoles(...allowedRoles) {
    return (req, res, next) => {
        if (!req.user || !allowedRoles.includes(req.user.role)) {
            return res.status(403).json({
                status: 'error',
                message: 'Akses terlarang: Peran akun Anda tidak memiliki izin untuk fitur ini.'
            });
        }
        next();
    };
}

module.exports = {
    authenticateToken,
    authorizeRoles
};
