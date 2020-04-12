import express from 'express';
import { Server } from 'typescript-rest';
import config from './common/config';
import UsersControllers from './Controllers/Users.controllers';

const app = express();

// Initialization of all controllers
Server.buildServices(
  app,
  UsersControllers
);

app.listen(config.PORT, () => {
  // tslint:disable-next-line:no-console
  console.log('Server running on PORT: ', config.PORT);
});
