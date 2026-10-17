import { Router } from 'express';
import { getLabs, createLab } from '../controllers/loan.controller.js';
const router = Router();
router.get('/', getLabs);
router.post('/', createLab);
export default router;
