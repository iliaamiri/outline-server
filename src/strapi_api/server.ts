/*
* ///////////// Importing the HTTP server Express.js, from app.ts /////////////
* */
import server from './app';

/*
* ///////////// Setting the port that the API is listening on /////////////
* */
const PORT = process.env.PORT || 8080;

/*
* ///////////// Setting the app url /////////////
* */
const APP_URL = process.env.APP_URL || "http://localhost";

/*
* ///////////// Start listening /////////////
* */
server.listen(PORT, () => {
    console.log(`Server is available on ${APP_URL}:${PORT}`);
});