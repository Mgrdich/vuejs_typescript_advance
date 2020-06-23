export interface IPosts {
    id:string;
    img:string;
    game:string;
    description?:string;
    desc:string;
    content:string;
    title:string;
    rating:number;
    date:string;
    key:string;
}

export interface ISignIn {
    email:string;
    password:string;
}

export interface IAddPosts {
    title: string;
    desc: string;
    contents: string;
    rating:string;
    img:string;
}


export type DropdownData = Array<{
    translation:string;
    value:string|number;
}>



export interface InputFieldValidation {
    condition:boolean;
    text:string;
}

export interface IauthData {
    idToken:string;
    refreshToken:string;
    type: 'signin' | 'refresh' ;
}