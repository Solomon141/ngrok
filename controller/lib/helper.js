function errorHandler(error, name, from) {
    let loggerFunction = console.log;

    loggerFunction("------------START------------");
    loggerFunction("ERROR occured in " + name );
    loggerFunction("------------END------------");

    if (from === 'axios') {
        if(error.response) {
            loggerFunction(error.response.data);
            loggerFunction(error.response.status);
            loggerFunction(error.response.headers);
        }else if(error.request){
            loggerFunction(error.request);
        }else{
            loggerFunction("Error", error.message);
        }
        loggerFunction(error.toJSON());

    }else{
        loggerFunction(error);

    }

}

module.exports = { errorHandler : errorHandler}