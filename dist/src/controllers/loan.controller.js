"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLab = exports.getLabs = void 0;
const getLabs = (req, res) => {
    res.json({
        message: 'Lista de laboratorios obtenida con éxito',
        data: [
            { id: 1, nombre: 'Laboratorio de Software 1', capacidad: 30 },
            { id: 2, nombre: 'Laboratorio de Redes', capacidad: 25 }
        ]
    });
};
exports.getLabs = getLabs;
const createLab = (req, res) => {
    const { nombre, capacidad } = req.body;
    res.status(201).json({
        message: 'Laboratorio creado correctamente',
        data: { id: Date.now(), nombre, capacidad }
    });
};
exports.createLab = createLab;
