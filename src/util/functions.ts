import {IauthData} from "@/interfaces";

export function localStorage_TokenSet(authData:IauthData):void {
    localStorage.setItem('token', authData.idToken);
    localStorage.setItem('refresh', authData.refreshToken);
}

export function localStorage_RemoveToken():void {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh');
}