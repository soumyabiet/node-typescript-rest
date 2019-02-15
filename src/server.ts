import { config } from 'dotenv';
import app from './app';

// Dotenv Configration
config({ path: '.env.development' });

const port = process.env.SERVER_PORT || 8088;

const server = app.listen(port, () => {
    console.log(
        ' App is running at http://localhost:%s in %s mode',
        port,
        app.get('env')
    );
    console.log('  Press CTRL-C to stop\n');
});

export default server;
