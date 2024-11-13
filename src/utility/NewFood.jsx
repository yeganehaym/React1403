import {useState} from "react";
import Joi from 'joi'
import {messages} from "./joi/Joi_Translations";
import {toast, ToastContainer} from "react-toastify";


export function NewFood() {

    const [food, setFood] = useState({
        id: 0,
        name: '',
        order: 1,
        price: '',
        materials: ''
    });

    const [errors, setErrors] = useState([]);

    function handleInput(e) {
        const copy = {...food};
        copy[e.target.name] = e.target.value;
        setFood(copy);
    }

    function handleSubmit(e) {
        e.preventDefault();

        const schema = Joi.object({
            name: Joi.string().required().label('نام'),
            materials: Joi.string().required().label('مواد تشکیل دهنده غذا'),
            price: Joi.string().required().label('مبلغ'),
            order: Joi.number().required().min(1).max(100).label('ترتیب نمایش'),
        })

        const result = schema.validate(food, {
            abortEarly: false,
            allowUnknown: true,
            messages: messages,
            errors: {language: 'fa'}
        });

        if (result.error && result.error.details.length > 0) {
            const err = result.error.details.map(d => d.message)
            setErrors(err)
            return;
        }

        toast.success("با موفقیت ارسال شد.",{
            rtl: true
        })
        setErrors([])
    }

    return <>

        <div className="panel mt-5">
            <form method="post" onSubmit={handleSubmit}>
                {errors && errors.length > 0 && <p className={"alert alert-danger"}>
                    <ul>
                        {/* eslint-disable-next-line react/jsx-key */}
                        {errors.map(e => <li>{e}</li>)}
                    </ul>
                </p>}
                <div className="form-group">
                    <label>دسته بندی </label>
                    <select className={"form-select"}>
                        <option>فست فود</option>
                        <option>کافه</option>
                        <option>سالاد</option>
                    </select>

                </div>
                <div className="form-group">
                    <label>نام غذا</label>
                    <input type="text" value={food.name} className="form-control" placeholder="مثال : خورشت"
                           name={"name"} onInput={handleInput}/>

                </div>

                <div className="form-group">
                    <label>ترتیب نمایش</label>
                    <input type="number" className="form-control" value={food.order} name={"order"}
                           onInput={handleInput}/>
                </div>

                <div className="form-group">
                    <label>مواد تشکیل دهنده غذا</label>
                    <input type="text" className="form-control" value={food.materials} placeholder="مثال : نخود، فلفل"
                           name={"materials"} onInput={handleInput}/>

                </div>

                <div className="form-group">
                    <label>مبلغ</label>
                    <input type="text" value={food.price} className="form-control" placeholder="مثال : 250 هزار تومان"
                           name={"price"} onInput={handleInput}/>

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
        <ToastContainer />
    </>
}