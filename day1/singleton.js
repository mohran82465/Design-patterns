class Logger {
    static instance = null;  
    constructor(){

    }

    getInstance () {
        if (!Logger.instance) {
            Logger.instance = new Logger();
          }
          return Logger.instance;
    }
    logInfo(message) {
        console.log(`INFO: ${message}`);
      }
    
      logWarn(message) {
        console.warn(`WARN: ${message}`);
      }
    

      logError(message) {
        console.error(`ERROR: ${message}`);
      }
    

      log(message) {
        console.log(`LOG: ${message}`);
      }

}
const logger = new Logger().getInstance(); 
logger.logInfo('this is a dummy info message');
logger.logWarn('this is a dummy warning message');
logger.logError('this is a dummy error message');
logger.log('this is a dummy normal log message');
const logger2 = new Logger() .getInstance();
console.log(logger == logger2);