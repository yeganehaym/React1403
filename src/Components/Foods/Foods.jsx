import {useEffect, useState} from "react";
import {Food} from "./Food";
import {func} from "joi";
import {GetFoods} from "../../Services/FoodService";
import {useSelector} from "react-redux";

export function Foods(){

    const[foods,setFoods]=useState([])

    const f2=useSelector(x=>x.foods);

    useEffect(function (){
       async function fetchData(){
           const f=await GetFoods(f2.catId);
           setFoods(f)
       }

       fetchData()
    },[f2])

    return <>
        <div className="container mt-5">
            <h3>پیتزا ایتالیایی</h3>

            {f2.catId}
            <div className="row my-5">

                {
                    foods.map(f => <Food food={f} key={f.id}/>)
                }


            </div>
        </div>

    </>
}