import { Router } from 'express';
import { getAmbientes, createAmbiente, patchAmbiente } from '../controllers/ambiente.controller';

const router = Router();

router.get('/', getAmbientes);
router.post('/', createAmbiente);
router.patch('/:id', patchAmbiente); // Usando PATCH tal como lo solicita la guía

export default router;