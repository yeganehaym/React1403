import {useCallback, useEffect, useState} from "react";
import {Link} from "react-router-dom";

export const GeoLocation=()=>{


    const [location,setLocation]=useState({
        lat:0,
        lng:0
    });

     var watchId=0;
     var mount=false;

    const setGeoLocation=(location)=>{

        if(mount==false)
            return;

        const {latitude:lat, longitude:lng} = location.coords;
        setLocation({lat,lng});
        console.log({lat,lng});
    }


    useEffect(()=>{
        mount=true;
        window.navigator.geolocation.getCurrentPosition(setGeoLocation)

        watchId=window.navigator.geolocation.watchPosition(setGeoLocation);

        return () => {
            window.navigator.geolocation.clearWatch(watchId);
            mount=false;
        }
    },[])
    return <>

        <p style={{display: 'flex', justifyContent: 'center'}}>
            <strong style={{direction: 'ltr'}}>
                Lat:{location.lat} - Lng:{location.lng}
            </strong>
        </p>

    </>
}