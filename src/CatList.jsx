import {useEffect, useState} from "react";
import * as catServices from "./Services/CatService";
import {Link} from "react-router-dom";
import {toast} from "react-toastify";

export function CatList(){

    const [list,setList]=useState([]);

    useEffect(()=>{

        const fetch=async ()=>{
            const newCats=await catServices.GetCats();
            setList(newCats);
        }

        fetch()

    },[])

    const removeCat=async (id)=>{
        var result=await catServices.removeCat(id);

        if(result==true)
        {
            var  newList=[...list];
            newList=newList.filter(item=>item.id!==id);
            setList(newList);
        }
        else{
            toast.error("Error occurred");
        }
    }

    return <>
        <div className="mt-5">
            <table className="table table-bordered table-striped">
                <thead>
                <tr>
                    <th>نام گروه</th>
                    <th>عملیات</th>
                </tr>
                </thead>
                <tbody>
                {
                    list.map((item,i)=> <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>
                                <Link to={"/cats/edit/" + item.id} className="btn btn-warning">ویرایش</Link>
                                <button className="btn btn-danger" onClick={()=>removeCat(item.id)}>حذف</button>
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    </>
}