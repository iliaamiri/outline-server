import config from './config/app.config';

import server from './app';

const PORT = config.port;

const APP_URL = config.appUrl;

server.listen(PORT, () => {
    console.log(`Server is available on ${APP_URL}:${PORT}`);
});