import express from 'express';
import requestController from '../controller/request';

const requestRoute = express.Router();

requestRoute.get('/', requestController.getRequest);

export default requestRoute;