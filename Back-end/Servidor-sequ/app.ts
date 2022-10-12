import express, { Express, Request, Response, Router } from 'express';
import dotenv from 'dotenv'
import UserModule from './src/modules/users/users.module';


class App {
  public server;
  private port;

  constructor() {
    dotenv.config(); 
    this.port = process.env.PORT;

    console.log('initializing');

    this.server = express();

    this.middlewares();
    this.routes();

    this.server.listen(this.port, () => {
      console.log(`Server is running at https://localhost:${this.port}`);
    });
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(UserModule.routes);
  }
}

export default new App();