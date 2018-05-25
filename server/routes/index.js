import express from 'express';

import requestRoute from './allRequest';


const apiRoutes = express.Router();

apiRoutes.use('/users', requestRoute);




export default apiRoutes;
