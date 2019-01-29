import * as express from 'express';
import { json, urlencoded } from 'body-parser';


import { Routes } from './routes/routes';


class App {
    private app: express.Application;
    private route: Routes =  new Routes();

    constructor() {
        this.config();
    }

    public getApp() {
        return this.app;
    }

    private config(): void {
        this.app = express();
        this.app.use( json() );
        this.app.use( urlencoded({ extended: false }));
        this.app.use( express.static('public') );

        this.route.register( this.app );
    }
}

export default (new App()).getApp();