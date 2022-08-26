import express from 'express';
import logger from '../../middlewares/logger';
import validation from '../../middlewares/validation';
import constants from '../../utilities/constants';

const images = express.Router();

images.get('/', validation, logger, (req: express.Request, res: express.Response): void => {
    // Creating an HTML file to contain the resized image
    res.send(
        constants.pgHtml(
            constants.fullUrl,
            constants.port,
            constants.endPoint2,
            constants.qr_fnm,
            req.query.fnm as string,
            constants.qr_wdt,
            req.query.wdt as string,
            constants.qr_hit,
            req.query.hit as string
        )
    );
});

export default images;
