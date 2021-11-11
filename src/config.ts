const ENV = process.argv;
const APP_PORT = process.env.APP_PORT || 3005;

export const config = {
    APP_PORT,
    ENV,
};