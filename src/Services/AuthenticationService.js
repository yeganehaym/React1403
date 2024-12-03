import {client} from "./AppAxios";
import {func} from "joi";

export async function login(loginInfo)
{
    try {
        var result=await client.post('/Login',loginInfo)
        var token=result.data.token
        if(token==undefined)
            return false;
        localStorage.setItem("token",token)
        return true;
    }
    catch (error)
    {
        return false;
    }
}