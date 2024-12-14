import {useEffect, useState} from "react";
import {Category} from "./Category";
import {GetCats} from "../../Services/CatService";

export function Categories(props){

    const [categories, setCategories] = useState([]);

    useEffect(function(){

        async function fetchData()
        {
            const cats=await GetCats();
            setCategories(cats)
        }

        fetchData()
    },[])

    return <>


        <div className="cats">
            <div className="d-flex justify-content-around flex-wrap">

                {
                    categories.length>0 &&
                    categories.map(cat=><Category key={cat.id} cat={cat}/>)
                }

            </div>
        </div>

    </>
}