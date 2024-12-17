import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

export const Cursor=()=>{

    const [location,setLocation]=useState({x:0,y:0});

    const onMouseMove = (e) => {
        //const x=e.clientX;
        // const y=e.clientY;

        const {clientX:x, clientY:y} = e;
        setLocation({x,y})
        console.log({x,y})
    }

    useEffect(()=>{
        window.addEventListener("mousemove",onMouseMove);

        return () => {
            window.removeEventListener("mousemove",onMouseMove);
        }

    },[])

    return <>

        <p style={{display: 'flex', justifyContent: 'center'}}>
            <strong style={{direction: 'ltr'}}>{location.x} x {location.y}</strong>
        </p>

        <Link to={"/login"}>Login</Link>
    </>
}