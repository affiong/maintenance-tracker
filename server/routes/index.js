import express from 'express';

import requestRoute from './AllRequest';


const apiRoutes = express.Router();

apiRoutes.use('/AllRequest', requestRoute);




export default apiRoutes;