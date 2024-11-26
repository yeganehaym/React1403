import {func} from "joi";
import axios from "axios";
import {useEffect, useState} from "react";

export function Calendar(){

    const [date,setDate]=useState("-");


    function getOccasions(){
        var promise=axios.get('https://worldtimeapi.org/api/timezone/Asia/tehran');
        promise.then(function(data){
            setDate(data.data.datetime)
            console.log(data);
        })
    }

    async function getOccasionsAsync(){
        var response=await axios.post('https://worldtimeapi.org/api/timezone/Asia/tehran');
        setDate(response.data.datetime)
        console.log(response);
    }
    return <>
    <strong>هم اکنون:</strong> <span style={{direction:'ltr'}}>{date}</span>
<br/>
        <button onClick={getOccasionsAsync} className={"btn btn-primary"}>دریافت ساعت</button>
    </>
}