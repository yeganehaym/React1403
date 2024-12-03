import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export function Logout(){

    const navigate=useNavigate();
    useEffect(function (){
        localStorage.removeItem("token")
        navigate("/login")
    })
    return<></>
}