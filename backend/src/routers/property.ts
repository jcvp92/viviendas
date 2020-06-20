import { Router } from 'express';
import { addProperty } from '../controllers/property';
import { verifyToken,verifyRole } from '../middlewares/authentication';

export const property_router: Router = Router();
property_router.post('/property', verifyToken, verifyRole, addProperty);


