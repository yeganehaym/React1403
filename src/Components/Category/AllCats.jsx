import {useEffect, useState} from "react";
import {GetFilters} from "../../Services/CatService";
import {Categories} from "./Categories";

export function AllCats(){

    const [filters,setFilters]=useState([]);
    useEffect(function (){
        const f=GetFilters()
        setFilters(f)
        console.log(f)
    },[])
    return<>

        {

            filters && filters.length>0 &&
            filters.map(f=><Categories key={f.id} filter={f}/>)
        }
    </>
}