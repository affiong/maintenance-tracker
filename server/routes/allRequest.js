import express from 'express';
import requestController from '../controller/request';

const requestRoute = express.Router();

requestRoute.get('/', requestController.getRequest);
requestRoute.post('/', requestController.createRequest); 

export default requestRoute;