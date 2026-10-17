import { Request, Response } from 'express';

export const getUsers = (req: Request, res: Response) => {
  res.status(501).json({ message: "Obtener usuarios todavía no está implementado" });
};

export const createUser = (req: Request, res: Response) => {
  res.status(501).json({ message: "Usuario creado todavía no está implementado" });
};

export const updateUser = (req: Request, res: Response) => {
  res.status(501).json({ message: "Actualizar usuario todavía no está implementado" });
};

export const patchUser = (req: Request, res: Response) => {
  res.status(501).json({ message: "Eliminar usuario todavía no está implementado" });
};