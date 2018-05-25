import express from 'express';

import requestRoute from './AllRequest';


const apiRoutes = express.Router();

apiRoutes.use('/users', requestRoute);




export default apiRoutes;