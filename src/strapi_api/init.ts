import * as fs from 'fs';
import * as dotenv from 'dotenv';

class Witcher {
  public static JWT_PRIVATE_KEY : string;
  public static JWT_PUBLIC_KEY : string;

  static {
    Witcher.JWT_PRIVATE_KEY = fs.readFileSync('./resources/jwt/jwtRS256.key').toString();

    Witcher.JWT_PUBLIC_KEY = fs.readFileSync('./resources/jwt/jwtRS256.key.pub').toString();
  }
}

/*
* ///////////// Loading the environment variable configurations from .env file /////////////
* */
dotenv.config();

export default Witcher;