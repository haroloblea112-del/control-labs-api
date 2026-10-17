import { Router } from 'express';
import { getNovedades, createNovedad, patchNovedad } from '../controllers/novedad.controller';

const router = Router();

router.get('/', getNovedades);
router.post('/', createNovedad);
router.patch('/:id', patchNovedad);

export default router;