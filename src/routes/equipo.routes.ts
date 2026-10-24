import { Router } from 'express';
import { getEquipos, createEquipo, patchEquipo } from '../controllers/equipo.controller';
import { validateEquipoPayload } from '../middlewares/validateEquipo.middleware';

const router = Router();

router.get('/', getEquipos);
router.post('/', validateEquipoPayload, createEquipo); // Middleware de validación agregado
router.patch('/:id', patchEquipo);

export default router;