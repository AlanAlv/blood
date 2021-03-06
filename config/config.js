require('dotenv').config();

let CONFIG = {} //Make this global to use all over the application

CONFIG.app = process.env.APP || 'dev';
CONFIG.port = process.env.PORT || '3000';

CONFIG.db_host = process.env.DB_HOST || 'localhost';
CONFIG.db_port = process.env.DB_PORT || '27017';
CONFIG.db_name = process.env.DB_NAME || 'test';
CONFIG.db_user = process.env.DB_USER || 'admin';
CONFIG.db_password = process.env.DB_PASSWORD || 'localadmin';

module.exports = CONFIG;

