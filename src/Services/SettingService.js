import {client} from "./AppAxios";

export async function changePassword(password){

    const data=await client.post('/changepassword',password);
    return {success:data.data.success,message:data.data.message};
}

export async function getInfo(){

    const data=await client.get('/getInformation');
    if(data.status==200)
        return data.data;

    return null;
}

export async function setInfo(info){

    const data=await client.post('/setInformation',info);
    if(data.status==200 && data.data.success==true)
        return true

    return false;
}