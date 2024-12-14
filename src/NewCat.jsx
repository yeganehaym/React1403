import Joi, {func} from "joi";
import {useState} from "react";
import {messages} from "./Joi/Joi_Translations";
import * as catService from "./Services/CatService";
import * as cvt from "convert-size"

export function NewCat(props){

    const [cat,setCat]=useState({
        id:0,
        name:'',
        order:1,
        file:null
    })

    const [sending, setSending]=useState(false);

    const [amar,setAmar]=useState({
        progress:0,
        remainingTime:0,
        uploadSpeed:0,
        elapsedTime:0,
        loaded:0,
        total:0
    })

    const [errors,setErrors]=useState([]);

    function handleInput(e){
        var mycat={...cat};
        mycat[e.target.name]=e.target.value;
        setCat(mycat);
    }
   async function handleSubmit(e){
        e.preventDefault();
        setSending(true);

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
            setSending(false);
            return;
        }

     try {
         var data=await catService.NewCat(cat,amar=>{
             setAmar(amar)
         })
         if(data.success==true)
         {
             alert('Ok');
             setCat({name:'',order: 1})
         }
         else{
             alert('Error')
         }

         setSending(false);
     }
        catch (e)
        {
            console.log(e)
            setSending(false);
        }

    }

    function setFile(e){

        if(e.target.files.length==0)
            return;

        var file=e.target.files[0];
        setCat({...cat,file:file});
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
                    <input type="file" onChange={e=>setFile(e)} className="form-control"/>

                </div>

                <div className="form-group mt-3">
                    <button disabled={sending==true} className="btn btn-secondary" type="submit">ثبت</button>
                </div>

                <div>
                    <div className="progress mt-3">
                        <div className="progress-bar" role="progressbar" style={{width:amar.progress+"%"}}
                             >{amar.progress.toFixed(2)}%
                        </div>
                    </div>
                    <div style={{display:"flex", justifyContent:"space-between",marginTop:"10px"}}>
                        <div>
                            <strong>زمان سپری شده:</strong><span> {Math.round(amar.elapsedTime)} ثانیه</span>
                        </div>

                        <div>
                            <strong>زمان باقی مانده:</strong><span> {Math.round(amar.remainingTime)} ثانیه</span>
                        </div>

                        <div>
                            <strong>سرعت بارگذاری:</strong><span> {cvt(amar.uploadSpeed, { accuracy: 2 })}/S</span>
                        </div>

                        <div>
                            <strong> کل اندازه فایل:</strong><span> {cvt(amar.loaded, { accuracy: 2 })}</span>
                        </div>

                        <div>
                            <strong>مقدار حجم ارسالی:</strong><span> {cvt(amar.total, { accuracy: 2 })}</span>
                        </div>

                    </div>
                </div>

            </form>
        </div>
    </>
}