import express from 'express';
import routes from './routes/index';
import constants from './utilities/constants';

const app = express();
const port = constants.port;

// set endpoint
app.use('/api', routes);

// check for port to avoid allready in use error testing
app.listen(port, () => {
    console.log(constants.srvrStr + constants.fullUrl + constants.port);
});

export default app;
