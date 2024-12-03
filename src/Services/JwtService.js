import {jwtDecode} from "jwt-decode";

export const getName=()=>{
    const token=localStorage.getItem('token');
    if(!token)
        return '';
    const body=jwtDecode(token);
    return body.name;
}

export const isValid=()=>{
    const token=localStorage.getItem('token');
    if(!token)
        return false;
    const body=jwtDecode(token);
    const exp=body.exp;
    const date=new Date(exp*1000);
    console.log(date);

    if(date<new Date())
        return false;
    return true;
}