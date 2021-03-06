'use strict';

/**
 * @author      - Harminder Virk
 * @package     - adonis-framework
 * @description - Dispatcher for adonis framework
 */

module.exports = {
  Route: require('./src/Route'),
  Response: require('./src/Response'),
  Request: require('./src/Request'),
  Session : require('./src/Session'),
  Env: require('./src/Env'),
  View: require('./src/View'),
  Server: require('./src/Server'),
  Middlewares: require('./src/Middleware'),
  Static: require('./src/Static'),
  Helpers : require('./src/Helpers'),
  Namespace : require('./src/Namespace'),
  HttpException: require('./src/HttpException'),
  App: require('./src/App'),
  Logger: require('./src/Logger')
}
