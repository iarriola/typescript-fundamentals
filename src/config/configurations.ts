import dotenv = require('dotenv');

/**
 * Defined enums of node js environments
 */
export enum Environments {
  production, development, test 
}

/**
 * Selected node environment
 */
type Environment =  keyof typeof Environments;

export class Configuration  {
  
  constructor () {
    dotenv.config();
  }

  getPort(): number {
    return (process.env.PORT) ? +process.env.PORT : 3000
  }
  
  getConnection(): string {
    return (process.env.DB_CONNECTION) ? process.env.DB_CONNECTION : 'mongodb://root:root@localhost:27017/admin';
  }

  getEnviroment(): Environment {
    return process.env.NODE_ENV as Environment | Environments.production as Environment;
  }

}

const config = new Configuration();

export default config;