import 'dotenv/config';

export default {
  appName: process.env.APP_NAME ?? "Witcher",
  appDebug: process.env.APP_DEBUG ?? true,
  appUrl: process.env.APP_URL ?? "http://localhost",
  appVersion: process.env.APP_VERSION ?? "1.0",
  sessionSecret: process.env.SESSION_SECRET ?? "12345678",
  port: process.env.PORT ?? 8080,
  sqlDbHost: process.env.SQL_DB_HOST,
  sqlDbPort: process.env.SQL_DB_PORT,
  sqlDbName: process.env.SQL_DB_NAME,
  sqlDbUsername: process.env.SQL_DB_USERNAME,
  sqlDbPassword: process.env.SQL_DB_PASSWORD,
  sqlDbDialect: process.env.SQL_DB_DIALECT ?? "mysql",
};