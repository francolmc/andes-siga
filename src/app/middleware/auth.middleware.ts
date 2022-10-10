import { Response } from 'express';

export const auth = function(req: any, res: Response, next: any) {
    console.log(req.session);
    if (req.session && req.session.validateUser)
      return next();
    else
      return res.sendStatus(401);
  };