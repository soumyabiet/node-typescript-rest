import { Application, Request, Response } from 'express';

import { UserController } from '../controllers/user';

export class Routes {

    public register(app: Application) {
        app.get('/', (req: Request, res: Response) => {
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            });
        });

        // User Routes Configured
        this.userRoutes(app, new UserController);

        app.route('*')
        .all(( req: Request, res: Response) => {
            res.status(404).send({
                message: 'invalid request'
            });
        });
    }

    private userRoutes( app: Application,
                        users: UserController) {

        app.route('/users')
        .get(users.list)
        .post(users.create);
    }
}
