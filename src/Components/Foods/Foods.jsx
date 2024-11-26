import {useEffect, useState} from "react";
import {Food} from "./Food";
import {func} from "joi";
import {GetFoods} from "../../Services/FoodService";

export function Foods(){

    const[foods,setFoods]=useState([])

    useEffect(function (){
        const f=GetFoods();
        setFoods(f)
    })

    return <>
        <div className="container mt-5">
            <h3>پیتزا ایتالیایی</h3>

            <div className="row my-5">

                {
                    foods.map(f => <Food food={f} key={f.id}/>)
                }


            </div>
        </div>

    </>
}