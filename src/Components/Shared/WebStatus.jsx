import {useEffect, useState} from "react";

export const WebStatus=()=>{

    const [isOnline,setIsOnline]=useState(true);

    const setOn=()=>{
        setIsOnline(true);
    }
    const setOff=()=>{
        setIsOnline(false);
    }
    useEffect(()=>{

        window.addEventListener("online",setOn)
        window.addEventListener("offline",setOff)

        return ()=>{
            window.removeEventListener("online",setOn);
            window.removeEventListener("offline",setOff);
        }
    })

    return <>

        {isOnline==false &&

            <div className="alert alert-warning position-absolute start-50" style={{bottom:'25px',transform:'translateX(-50%)'}} role="alert">اینترنت در حال حاضر در دسترس نمی باشد</div>
        }


    </>
}