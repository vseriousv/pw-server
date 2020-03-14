const config = {
  IP: process.env.NODEJS_IP || '127.0.0.1',
  PORT: process.env.PORT || normalizePort('8080'),
  SECRET_TOKEN_KEY: process.env.TOKEN_SECRET || '#tokenSecret#',
  FS_DATA_USERS_PATH: process.env.FS_DATA_USERS_PATH || './data/UsersFunction.json',
  FS_DATA_FUNCTIONS_PATH: process.env.FS_DATA_FUNCTIONS_PATH || './data/functions.json'
}

export function normalizePort(val: string): number | string {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return 0;
}

export { config };
