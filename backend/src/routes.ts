import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';
import UserController from './controllers/UserController';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images') , OrphanagesController.create);

routes.post('/user', UserController.create);
routes.get('/list', UserController.index);
routes.post('/login', UserController.show);

export default routes;