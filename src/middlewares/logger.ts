import constants from '../utilities/constants';
import express from 'express';

const logger = (
    req: express.Request,
    res: express.Response,
    // eslint-disable-next-line @typescript-eslint/ban-types
    next: Function
): void => {
    if (constants.enableLogger) {
        const url = req.originalUrl;
        console.log(constants.visited(constants.fullUrl + constants.port + url, constants.timeStamp()));
    }

    next();
};

export default logger;
