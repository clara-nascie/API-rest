//declaração de tipos para o express
//isso serve para que o typescript reconheça o userId no request
declare namespace Express {
    export interface Request {
        userId: string
    }
}