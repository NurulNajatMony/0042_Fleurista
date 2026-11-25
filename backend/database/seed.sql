USE fleurista_db;

INSERT INTO users (name, email, password_hash, phone, role) VALUES
('Admin Toko Fleurista', 'admin@fleurista.id', '$2a$10$0E/0B/833MzL4C0w9q.H.uFORXphrOmNpyGZnE.XMtwdzB2Kb/Tp.', '081234567890', 'admin'),
('Nurul Najat Mony', 'pelanggan@fleurista.id', '$2a$10$0E/0B/833MzL4C0w9q.H.uFORXphrOmNpyGZnE.XMtwdzB2Kb/Tp.', '082198765432', 'customer');

INSERT INTO categories (name, description) VALUES
('Buket Bunga Segar', 'Buket mawar, lily, dan baby breath segar untuk hadiah spesial.'),
('Buket Wisuda & Boneka', 'Buket wisuda lengkap dengan boneka toga dan pita satin.'),
('Hampers & Gift Box', 'Kotak hadiah berisi rangkaian bunga, cokelat, dan kartu ucapan.');

INSERT INTO products (category_id, name, description, price, stock, image_url) VALUES
(1, 'Buket Mawar Pink Pastel', 'Buket 10 tangkai mawar pink segar dengan wrapping kertas Korea.', 150000.00, 12, 'https://images.unsplash.com/photo-1561181286-d3fee7d55364'),
(2, 'Buket Boneka Wisuda', 'Buket boneka beruang toga dengan bunga artificial premium.', 120000.00, 20, 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38'),
(3, 'Sweet Rose Gift Box', 'Gift box eksklusif berisi mawar, cokelat Ferrero, dan kartu ucapan.', 225000.00, 10, 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48');

INSERT INTO addresses (user_id, label, recipient_name, recipient_phone, full_address) VALUES
(2, 'Rumah', 'Nurul Najat Mony', '082198765432', 'Jl. Brawijaya No. 42, Kasihan, Bantul, DIY'),
(2, 'Kampus UMY', 'Alya Rahmawati', '081344556677', 'Gedung Sportorium UMY, Tamantirto, Kasihan, Bantul');

INSERT INTO orders (order_code, user_id, product_id, address_id, quantity, delivery_date, greeting_card_text, total_price, status) VALUES
('FLR-001', 2, 1, 1, 1, '2026-11-26', 'Selamat Ulang Tahun! Semoga bahagia selalu.', 150000.00, 'Diproses'),
('FLR-002', 2, 2, 2, 2, '2026-11-28', 'Happy Graduation sahabatku! Sukses selalu.', 240000.00, 'Pending');

INSERT INTO reviews (user_id, product_id, rating, comment) VALUES
(2, 1, 5, 'Mawar pink-nya segar banget dan bungkusnya rapi!'),
(2, 2, 5, 'Boneka wisudanya lucu dan pengiriman tepat waktu.');
