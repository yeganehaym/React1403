import {Categories} from "./Components/Category/Categories";
import {useEffect, useState} from "react";
import * as foodService from "./Services/FoodService";
import {Link} from "react-router-dom";
import {toast} from "react-toastify";
import {GetCats} from "./Services/CatService";

export function FoodList(){

    const [foods,setFoods]=useState([]);

    const getAllFoods= async()=>{

        const allFoods=await foodService.getAllFoods()
        console.log(allFoods);
        setFoods(allFoods);
    }
    useEffect(()=>{
        async  function fetch(){
          await getAllFoods();

        }

        fetch()
    },[])

    const removeFood=async (id)=>{

        const result=await foodService.removeFood(id);
        if(result==true)
        {
            let myfoods=[...foods];
            myfoods=myfoods.filter(f=>f.id!==id);
            setFoods(myfoods);
            toast.success('Food Removed Successfully');
        }
        else {
            toast.error('Remove Failed')
        }
    }

    return <>


        <div className="mt-5">
            <table className="table table-bordered table-striped">
                <thead>
                <tr>
                    <th>نام غذا</th>
                    <th>گروه غذا</th>
                    <th>قیمت غذا</th>
                    <th>عملیات</th>
                </tr>
                </thead>
                <tbody>

                {
                    foods && foods.length>0 &&
                    <>
                    {
                        foods.map((food)=><tr>
                            <td>{food.name}</td>
                            <td>-</td>
                            <td>{food.price}</td>
                            <td>
                                <Link to={"/foods/edit/" + food.id} className="btn btn-warning">ویرایش</Link>
                                <button className="btn btn-danger" onClick={()=>removeFood(food.id)}>حذف</button>
                            </td>
                        </tr>)
                    }
                    </>

                }
                </tbody>
            </table>
        </div>
    </>
}