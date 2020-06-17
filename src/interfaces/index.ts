export interface IPosts {
    id:string;
    img:string;
    game:string;
    description:string;
    content:string;
    title:string;
    rating:number;
    date:string;
}

export interface ISignIn {
    email:string;
    password:string;
}

export interface InputFieldValidation {
    condition:boolean;
    text:string;
}