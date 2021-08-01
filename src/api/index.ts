import express from 'express';
import "reflect-metadata";
import { ConnectionOptions, createConnection } from 'typeorm';
import config from './ormconfig';
import routes from './routes';

createConnection(config as ConnectionOptions).then(async (connection) => {
    const app = express()
    const port = process.env.PORT||8000

    app.use(express.json());
    app.use(routes);

    app.listen(port, () => console.log('deu certo!'));
})
