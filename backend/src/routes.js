import express from 'express';
import { SessionController, SpotControler } from './controllers';

const routes = express.Router();

routes.post('/sessions', SessionController.store);
routes.post('/spots', SpotControler.store);

export default routes;
