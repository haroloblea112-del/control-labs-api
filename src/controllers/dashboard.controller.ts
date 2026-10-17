import { Request, Response } from 'express';

export const getDashboardSummary = (req: Request, res: Response) => {
  res.status(501).json({ 
    message: "Obtener resumen consolidado del dashboard (usuarios, ambientes, equipos y novedades) todavía no está implementado" 
  });
};