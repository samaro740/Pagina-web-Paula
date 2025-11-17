const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    edad: { type: Number, required: true, min: 18 },
    genero: { type: String, enum: ['hombre', 'mujer', 'otro'], required: true },
    busca: { type: String, enum: ['hombre', 'mujer', 'otro'], required: true },
    fechaRegistro: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
