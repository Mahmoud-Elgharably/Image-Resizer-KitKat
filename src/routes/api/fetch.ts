import express from 'express';
import validate from '../../utilities/validate';
import imgProcessing from '../../utilities/imgProcessing';

const fetch = express.Router();

fetch.get('/', async (req: express.Request, res: express.Response): Promise<void> => {
    // Validating the url query string
    if (validate.isValid(req.query) == '') {
        // Getting the image width
        const wdt = (req.query.wdt as unknown as number) * 1;
        // Getting the image height
        const hit = (req.query.hit as unknown as number) * 1;
        // Generating the new image file name embedding width and height
        const szdImage = ((((req.query.wdt as string) + req.query.fnm) as string) + req.query.hit) as string;
        await imgProcessing.resizeImage(req.query.fnm as string, wdt, hit, szdImage);
        await imgProcessing.readImage(res, szdImage);
        //errLogger.info(req.query.fnm);
        //errLogger.info(req.query.wdt);
        //errLogger.info(req.query.hit);
    }
});

export default fetch;
