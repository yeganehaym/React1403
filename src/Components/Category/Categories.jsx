import {useEffect, useState} from "react";
import {Category} from "./Category";
import {GetCats} from "../../Services/CatService";

export function Categories(props){

    const [categories, setCategories] = useState([]);

    useEffect(function(){
        const cats=GetCats(props.filter?.id??1);
        setCategories(cats)
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