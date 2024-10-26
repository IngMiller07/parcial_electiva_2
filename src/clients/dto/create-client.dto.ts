import { IsEmail, IsInt, Max, Min, MinLength, MaxLength } from "class-validator";

export class CreateClientDto { //cracion de restricciones

    @MinLength(5, { message: "El nombre es muy corto"})
    firstname: string;

    @MinLength(5, { message: "El apellido es muy corto"})
    lastname: string;

    @IsEmail()
    email: string;

    @IsInt()
    @Min(15, { message: "La edad no puede ser menor de 15 años"})
    @Max(50, { message: "La edad no puede ser mayor de 50 años"})
    
    age: number;
    @MinLength(10, { message: "La cedula debe tener minimo 10 caracteres"})
    @MaxLength(10, { message: "La cedula debe tener maximo 10 caracteres"})

    Cc: string;
}