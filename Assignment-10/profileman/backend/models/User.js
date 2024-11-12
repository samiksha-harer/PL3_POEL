const db = require('../config/db');

const User = {
    create: (data, callback) => {
        const { name, email, phone, address, password } = data;
        const query = `INSERT INTO users (name, email, phone, address, password) VALUES (?, ?, ?, ?, ?)`;
        db.query(query, [name, email, phone, address, password], callback);
    },

    findByEmail: (email, callback) => {
        const query = 'SELECT * FROM users WHERE email = ?';
        db.query(query, [email], callback);
    },

    findById: (id, callback) => {
        const query = 'SELECT * FROM users WHERE id = ?';
        db.query(query, [id], callback);
    },

    update: (id, data, callback) => {
        const { name, phone, address } = data;
        const query = 'UPDATE users SET name = ?, phone = ?, address = ? WHERE id = ?';
        db.query(query, [name, phone, address, id], callback);
    },

    delete: (id, callback) => {
        const query = 'DELETE FROM users WHERE id = ?';
        db.query(query, [id], callback);
    }
};

module.exports = User;
