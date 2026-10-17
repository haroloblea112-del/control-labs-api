import { Router } from 'express';
import { getEquipos, createEquipo, patchEquipo } from '../controllers/equipo.controller';

const router = Router();

router.get('/', getEquipos);
router.post('/', createEquipo);
router.patch('/:id', patchEquipo);

export default router;