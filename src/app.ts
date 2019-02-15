import { json, urlencoded } from 'body-parser';
import * as express from 'express';
import { initialize } from 'passport';
import * as Sequelize from 'sequelize';

import { Routes } from './routes/routes';

class App {
    private app: express.Application;
    private route: Routes = new Routes();

    constructor() {
        this.config();
    }

    public getApp() {
        return this.app;
    }

    private config(): void {
        this.app = express();
        this.app.use(json());
        this.app.use(urlencoded({ extended: false }));
        this.app.use(express.static('public'));
        // Passport initialize
        this.app.use(initialize());

        this.route.register(this.app);
        this.databaseConfig();
    }

    private databaseConfig(): void {
        const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/node_rest', {
            dialect: 'postgres',
            operatorsAliases: false
        });

        sequelize.authenticate()
        .then(() => console.log('Connection has been established successfully.'))
        .catch( err => console.log( 'Unable to connect database ', err ));
    }
}

export default new App().getApp();
