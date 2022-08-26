import fs from 'fs';
import { ParsedQs } from 'qs';
import constants from './constants';

function isValid(query: ParsedQs | null | undefined) {
    if (query == null) {
        return 'Error - Invalid inputs';
    } else if (query == undefined) {
        return 'Error - Invalid inputs';
    } else if (!Object.prototype.hasOwnProperty.call(query, constants.qr_fnm)) {
        return 'Error - Invalid inputs';
    } else if (!Object.prototype.hasOwnProperty.call(query, constants.qr_wdt)) {
        return 'Error - Invalid inputs';
    } else if (!Object.prototype.hasOwnProperty.call(query, constants.qr_hit)) {
        return 'Error - Invalid inputs';
    } else {
        const fnm = query.fnm as string;
        const wdt = query.wdt as string;
        const hit = query.hit as string;

        if (fnm.trim() == '') {
            return 'Error - Image name can not be null';
        } else if (wdt.trim() == '') {
            return 'Error - Image width can not be null';
        } else if (hit.trim() == '') {
            return 'Error - Image height can not be null';
        } else if ((wdt as unknown as number) < 1) {
            return 'Error - Image width is invalid';
        } else if ((hit as unknown as number) < 1) {
            return 'Error - Image height is invalid';
        } else if (!fs.existsSync(constants.pathImg + fnm + constants.imgExtn)) {
            return 'Error - Image not found';
        } else {
            return '';
        }
    }
}

export default { isValid };
