import express from 'express';
import fs from 'fs';
import sharp from 'sharp';
import constants from '../utilities/constants';
import errLogger from '../utilities/errLogger';

async function resizeImage(image: string, wdt: number, hit: number, szdImage: string): Promise<boolean> {
    try {
        // Check the existence of the image to create it if it does not exist
        if (!fs.existsSync(constants.pathSiz + szdImage + constants.imgExtn)) {
            // Resize the image using sharp
            await sharp(constants.pathImg + image + constants.imgExtn)
                .resize({
                    width: wdt,
                    height: hit,
                })
                .toFile(constants.pathSiz + szdImage + constants.imgExtn);
        }
        return true;
    } catch (error) {
        errLogger.error(error);
        return false;
    }
}

async function readImage(res: express.Response, szdImage: string): Promise<void> {
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

export default { resizeImage, readImage };
