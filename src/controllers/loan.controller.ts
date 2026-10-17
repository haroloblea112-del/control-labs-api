import { Request, Response } from 'express';

export const getLabs = (req: Request, res: Response) => {
  res.json({
    message: 'Lista de laboratorios obtenida con éxito',
    data: [
      { id: 1, nombre: 'Laboratorio de Software 1', capacidad: 30 },
      { id: 2, nombre: 'Laboratorio de Redes', capacidad: 25 }
    ]
  });
};

export const createLab = (req: Request, res: Response) => {
  const { nombre, capacidad } = req.body;
  res.status(201).json({
    message: 'Laboratorio creado correctamente',
    data: { id: Date.now(), nombre, capacidad }
  });
};