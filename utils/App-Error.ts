export class AppError {
    message: string;
    statusCode: number;

    // e chamado quando a classe e instanciada 
    constructor(message: string, statusCode: number = 400) {
        // recebendo a msg  do construtor e repassa para a variavel message 
        this.message = message;
        // recebendo o statusCode do construtor e repassa para a variavel statusCode 
        this.statusCode = statusCode;
    }

}