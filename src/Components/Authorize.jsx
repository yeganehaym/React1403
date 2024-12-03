import {useEffect} from "react";
import {func} from "joi";
import {isValid} from "../Services/JwtService";
import {useNavigate} from "react-router-dom";

export  function  Authorize(props){

    const navigate=useNavigate();
    useEffect(function (){
        const isLogged=isValid();
        if(isLogged==false)
        {
            navigate("/login")
        }
    })

    return<>
        {props.children}
    </>
}