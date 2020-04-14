import express from 'express';
import { Server } from 'typescript-rest';
import config from './common/config';
import UsersController from './Controllers/Users.controller';
import MainController from './Controllers/Main.controller';
import DatabaseController from './Controllers/Database.controller';
import NotificationController from './Controllers/Notification.controller';
import AuthController from './Controllers/Auth.controller';

const app = express();
// Initialization of all controllers
Server.buildServices(
  app,
  MainController,
  UsersController,
  DatabaseController,
  NotificationController,
  AuthController
);

app.listen(config.PORT, () => {
  // tslint:disable-next-line:no-console
  console.log('Server running on PORT: ', config.PORT);
});
