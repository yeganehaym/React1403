import {useEffect, useState} from "react";
import {Category} from "./Category";
import {GetCats} from "../../Services/CatService";
import {useDispatch} from "react-redux";
import {ChangeFoodCategoryAction} from "../../Actions/FoodsActions";

export function Categories(props){

    const [categories, setCategories] = useState([]);

    useEffect(function(){

        async function fetchData()
        {
            const cats=await GetCats();
            setCategories(cats)

            if(cats.length>0)
            {
                var cat=cats[0];
                dispatch(ChangeFoodCategoryAction(cat.id))
            }
        }

        fetchData()
    },[])

    const dispatch=useDispatch();

    const  updateSate=cat=>{
        console.log('OnClickkkkkk' + cat.id)
        dispatch(ChangeFoodCategoryAction(cat.id))
    }
    return <>


        <div className="cats">
            <div className="d-flex justify-content-around flex-wrap">

                {
                    categories.length>0 &&
                    categories.map(cat=><Category key={cat.id} cat={cat} onClick={cat=>updateSate(cat)}/>)
                }

            </div>
        </div>

    </>
}