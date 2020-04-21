const config = {
    dbUrl:
        process.env.DB_URL ||
        'mongodb+srv://platzi-admin:vmorelos@curso-platzi-de4ii.mongodb.net/telegrom?retryWrites=true&w=majority',
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTE || '/app',
};

module.exports = config;
