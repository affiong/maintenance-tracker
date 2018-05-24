import express from 'express';
import requestController from '../controller/request';

const requestRoute = express.Router();

requestRoute.get('/', requestController.getRequest);
requestRoute.post('/', requestController.createRequest); 
requestRoute.get('/:id', requestController.getRequestById);
requestRoute.put('/:id', requestController.modifyRequestById);

export default requestRoute;