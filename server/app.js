import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import apiRoutes from './routes'; 


const app = express();

const port = process.env.PORT || 4000;

app.use(logger('dev'));


app.use(bodyParser.json()); 

app.use('/api/v1',apiRoutes)

app.get('/', (req, res) => res.send({message: "welcome to mTracker by Affiong"}).status(200));

app.listen(port, () => {
  console.log('running on port 4000...');
});


export default app;
