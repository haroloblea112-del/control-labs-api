import { Router } from 'express';
import { getUsers, createUser, updateUser, patchUser } from '../controllers/user.controller';
import { validateUserPayload } from '../middlewares/validateUser.middleware';

const router = Router();

router.get('/', getUsers);
router.post('/', validateUserPayload, createUser);
router.put('/:id', updateUser);
router.patch('/:id', patchUser);

export default router;