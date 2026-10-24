import { Router } from 'express';
import { getAmbientes, createAmbiente, patchAmbiente } from '../controllers/ambiente.controller';
import { validateAmbientePayload } from '../middlewares/validateAmbiente.middleware';

const router = Router();

router.get('/', getAmbientes);
router.post('/', validateAmbientePayload, createAmbiente); // Middleware agregado aquí
router.patch('/:id', patchAmbiente);

export default router;