import { Request, Response } from 'express';

export const getEquipos = (req: Request, res: Response) => {
  res.status(501).json({ message: "Listar o filtrar equipos todavía no está implementado" });
};

export const createEquipo = (req: Request, res: Response) => {
  res.status(501).json({ message: "Registrar un nuevo equipo vinculado a un ambiente todavía no está implementado" });
};

export const patchEquipo = (req: Request, res: Response) => {
  res.status(501).json({ message: "Actualizar de forma parcial el estado técnico de un equipo vía PATCH todavía no está implementado" });
};