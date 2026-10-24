import { Router } from 'express';
import { getNovedades, createNovedad, patchNovedad } from '../controllers/novedad.controller';
import { validateNovedadPayload } from '../middlewares/validateNovedad.middleware';

const router = Router();

router.get('/', getNovedades);
router.post('/', validateNovedadPayload, createNovedad); // Middleware de validación agregado
router.patch('/:id', patchNovedad);

export default router;