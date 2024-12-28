
import {useEffect, useState} from "react";
import Joi from 'joi'
import {messages} from "./Joi/Joi_Translations";
import {Await, useNavigate, useParams} from "react-router-dom";
import {GetCats} from "./Services/CatService";
import * as foodServices from "./Services/FoodService";

export function NewFood(){

    var params=useParams();
    var navigate=useNavigate();

    const [cats,setCats]=useState([]);
const [food, setFood] = useState({
    id:0,
    catId:0,
    name:'',
    order:1,
    price:'',
    materials:''
});

const [errors,setErrors] = useState([]);
    const [sending, setSending]=useState(false);


function handleInput(e){
    const copy={...food};
    copy[e.target.name]=e.target.value;
    setFood(copy);
}

    async function handleSubmit(e)
    {
        e.preventDefault();

        setSending(true);

        const schema=Joi.object({
            name:Joi.string().required().label('نام'),
            materials:Joi.string().required().label('مواد تشکیل دهنده غذا'),
            price:Joi.string().required().label('مبلغ'),
            order:Joi.number().required().min(1).max(100).label('ترتیب نمایش'),

        })

        const result=schema.validate(food,{
            abortEarly: false,
            allowUnknown:true,
            messages:messages,
            errors:{language:'fa'}
        });

        console.log(result);

        if(result.error && result.error.details.length>0)
        {
            const err=result.error.details.map(d=>d.message)
            setErrors(err)
            setSending(false);
            return;
        }


        const data=await foodServices.newFoodByForm(food);

        if(data.success==true)
        {
            alert('Ok');
            setFood({...food,name:'',order: 1,materials: '',price: ''})
        }
        else{
            alert('Error')
        }
        setSending(false);

    }


    useEffect(()=>{

        async function fetch(){
            const items=await GetCats();
            const newItems=items.map(i=>({id:i.id,title:i.name}));
            setCats(newItems);
            if(newItems.length>0)
                setFood({...food,catId:newItems[0].id})
        }



        fetch()
    },[])
    return <>

        <div className="panel mt-5">

            <form method="post" onSubmit={handleSubmit}>
                {
                    errors && errors.length>0 &&
                    <p className={"alert alert-danger"}>
                        <ul>
                            {
                                errors.map(e=> <li>{e}</li>)
                            }
                        </ul>
                    </p>
                }
                <div className="form-group">
                    <label>دسته بندی </label>
                    <select className={"form-select"} onChange={e=>setFood({...food,catId:e.target.value})}>
                        {
                            cats.map(c => <option value={c.id}>{c.title}</option>)
                        }

                    </select>

                </div>
                <div className="form-group">
                    <label>نام غذا</label>
                    <input type="text" value={food.name} className="form-control" placeholder="مثال : خورشت" name={"name"} onInput={handleInput}/>

                </div>

                <div className="form-group">
                    <label>ترتیب نمایش</label>
                    <input type="number"  className="form-control" value={food.order} name={"order"} onInput={handleInput}/>
                </div>

                <div className="form-group">
                    <label>مواد تشکیل دهنده غذا</label>
                    <input type="text" className="form-control" value={food.materials} placeholder="مثال : نخود، فلفل" name={"materials"} onInput={handleInput}/>

                </div>

                <div className="form-group">
                    <label>مبلغ</label>
                    <input type="text" value={food.price} className="form-control" placeholder="مثال : 250 هزار تومان" name={"price"} onInput={handleInput}/>

                </div>
                <div className="form-group">
                    <label>تصویر</label>
                    <input type="file" onChange={e=>setFood({...food,file:e.target.files[0]})} className="form-control"/>

                </div>

                <div className="form-group mt-3">
                    <button className="btn btn-secondary" type="submit" disabled={sending}>ثبت</button>
                </div>


            </form>
        </div>

    </>
}