import { Request, Response } from 'express';

export const getNovedades = (req: Request, res: Response) => {
  res.status(501).json({ message: "Consultar el historial completo de incidencias reportadas todavía no está implementado" });
};

export const createNovedad = (req: Request, res: Response) => {
  res.status(501).json({ message: "Crear un reporte de novedad asociándolo a un equipo o ambiente todavía no está implementado" });
};

export const patchNovedad = (req: Request, res: Response) => {
  res.status(501).json({ message: "Actualizar parcialmente el estado de una novedad vía PATCH todavía no está implementado" });
};