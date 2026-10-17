import { Request, Response } from 'express';

export const getAmbientes = (req: Request, res: Response) => {
  res.status(501).json({ message: "Listar todos los espacios físicos y laboratorios todavía no está implementado" });
};

export const createAmbiente = (req: Request, res: Response) => {
  res.status(501).json({ message: "Crear un nuevo ambiente especificando capacidad y ubicación todavía no está implementado" });
};

export const patchAmbiente = (req: Request, res: Response) => {
  res.status(501).json({ message: "Actualizar atributos específicos de un ambiente vía PATCH todavía no está implementado" });
};