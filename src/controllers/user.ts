import { Request, Response } from 'express';

export class UserController {
    public list( req: Request, res: Response) {
        res.status(200).json({
            message: 'User List'
        })
    }
    
    public create( req: Request, res: Response) {
        
        res.status(200).json({
            ...req.body,
            message: 'User Create'
        })
    }
}