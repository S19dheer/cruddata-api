var config = {};
/*var env = process.env.NODE_ENV || 'development', cfg = require('./config.'+env);*/
config.env = process.env.NODE_ENV || 'development';/*, cfg = require('./config.'+env);*/
config.hostname='localhost';

config.mongo={};
config.mongo.uri = process.env.MONGO_URI || 'localhost';
config.mongo.db = ''
config.mongo.url = 'mongodb://localhost:27017/crudAppData';
config.webUrl = 'http://localhost:9000';
config.mobilUrl = 'http://localhost:8100';

module.exports = config;