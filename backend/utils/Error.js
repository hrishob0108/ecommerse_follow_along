class ErrorHandler extends Error{

    constructor(message,statuscode){
    
        super(message)
        this.statuscode=statuscode;


        Error.captureStackTrace(this,this.constructor)// it will the give main error only instead of bulky error message// this-->object //this.constructor-->Errorhandler class
    }
}

module.exports=ErrorHandler

//class Error{
// constructor(message){
//     this.message=message
// }
// }