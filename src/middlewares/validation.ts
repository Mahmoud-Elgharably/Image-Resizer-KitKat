import express from 'express';
import validate from '../utilities/validate';

const validation = (
    req: express.Request,
    res: express.Response,
    // eslint-disable-next-line @typescript-eslint/ban-types
    next: Function
): void => {
    const ret = validate.isValid(req.query);
    if (ret != '') {
        res.status(422).json({ errors: ret });
        return;
    } else {
        next();
    }
};

export default validation;