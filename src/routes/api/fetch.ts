import express from 'express';
import sharp from 'sharp';
import fs from 'fs';
import constants from '../../utilities/constants';
import validate from '../../utilities/validate';
import errLogger from '../../utilities/errLogger';

const fetch = express.Router();

fetch.get('/', async (req, res) => {
    let wdt = 0;
    let hit = 0;
    let szdImage = '';

    async function resizeImage() {        
        try {
            // Check the existence of the image to create it if it does not exist
            if (!fs.existsSync(constants.pathSiz + szdImage + constants.imgExtn)) {
                // Resize the image using sharp
                await sharp(constants.pathImg + req.query.fnm + constants.imgExtn)
                    .resize({
                        width: wdt,
                        height: hit,
                    })
                    .toFile(constants.pathSiz + szdImage + constants.imgExtn);
            }
        } catch (error) {
            errLogger.error(error);
        }
    }

    async function readImage() {
        try {
            // Check the presence of the image
            if (fs.existsSync(constants.pathSiz + szdImage + constants.imgExtn)) {
                // Getting the image file
                const img = await fs.readFileSync(constants.pathSiz + szdImage + constants.imgExtn);
                await res.send(img);    
            } else {
                throw 'The image does not exist';
            }             
        } catch (error) {
            errLogger.error(error);
        }
    }

    // Validating the url query string
    if (validate.isValid(req.query) == '') {
        // Getting the image width
        wdt = (req.query.wdt as unknown as number) * 1;
        // Getting the image height
        hit = (req.query.hit as unknown as number) * 1;
        // Generating the new image file name embedding width and height
        szdImage = ((((req.query.wdt as string) + req.query.fnm) as string) + req.query.hit) as string;
        await resizeImage();
        await readImage();
        //errLogger.info(req.query.fnm);
        //errLogger.info(req.query.wdt);
        //errLogger.info(req.query.hit);
    }
});

export default fetch;