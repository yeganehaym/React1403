import Joi, {func} from "joi";
import {useState} from "react";
import {messages} from "./Joi/Joi_Translations";
import * as catService from "./Services/CatService";

export function NewCat(props){

    const [cat,setCat]=useState({
        id:0,
        name:'',
        order:1
    })

    const [errors,setErrors]=useState([]);

    function handleInput(e){
        var mycat={...cat};
        mycat[e.target.name]=e.target.value;
        setCat(mycat);
    }
   async function handleSubmit(e){
        e.preventDefault();

        var schema=Joi.object({
            name:Joi.string().required(),
            order:Joi.number().required().min(1).max(100),
        })

        const result=schema.validate(cat,{
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
            return;
        }

     try {
         var data=await catService.NewCat(cat)
         if(data.success==true)
         {
             alert('Ok');
             setCat({name:'',order: 1})
         }
         else{
             alert('Error')
         }
     }
        catch (e)
        {
            console.log(e)

        }

    }
    return <>

        <div className="panel mt-5">
            <form method="post" onSubmit={handleSubmit}>

                {
                    errors && errors.length>0 &&
                    <div className="alert alert-danger">
                        <ul>
                            {
                                errors.map(e=><li>{e}</li>)
                            }
                        </ul>
                    </div>
                }
                <div className="form-group">
                    <label>نام گروه</label>
                    <input type="text" name={"name"} value={cat.name} className="form-control" onInput={handleInput} placeholder="مثال : سالاد"/>

                </div>

                <div className="form-group">
                    <label>ترتیب نمایش</label>
                    <input type="number" name={"order"} className="form-control" value={cat.order} onInput={handleInput}/>
                </div>

                <div className="form-group">
                    <label>تصویر</label>
                    <input type="file" className="form-control"/>

                </div>

                <div className="form-group mt-3">
                    <button className="btn btn-secondary" type="submit">ثبت</button>
                </div>


            </form>
        </div>
    </>
}