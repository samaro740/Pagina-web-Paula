const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

router.post('/registro', async (req, res) => {
    try {
        const { nombre, email, password, edad, genero, busca } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const usuarioNuevo = new User({
            nombre,
            email,
            password: hashedPassword,
            edad,
            genero,
            busca
        });
        await usuarioNuevo.save();
        res.send('¡Registro exitoso! Ahora puedes iniciar sesión.');
    } catch (err) {
        res.status(500).send('Error en el registro: ' + err.message);
    }
});

module.exports = router;
