import express from 'express';
import requestController from '../controller/requestController';

const requestControl = new requestController;

const requestRoute = express.Router();

requestRoute.get('/requests', requestControl.getRequest);
requestRoute.post('/requests', requestControl.createRequest);
requestRoute.get('/requests/:id', requestControl.getRequestById);
requestRoute.put('/requests/:id', requestControl.modifyRequestById);

export default requestRoute;