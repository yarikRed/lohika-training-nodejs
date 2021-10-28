const ENV = process.argv;
const APP_PORT = process.env.APP_PORT || 3005;

const config = {
    APP_PORT,
    ENV,
};

module.exports = config;