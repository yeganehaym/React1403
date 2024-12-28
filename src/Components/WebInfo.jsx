import {useEffect, useState} from "react";
import {getInfo, setInfo} from "../Services/SettingService";
import {toast} from "react-toastify";

export  const WebInfo=()=>{

    const [state,setState]=useState({
        "id": 0,
        "creationDate": "2020-01-01",
        "address": "",
        "workours": "",
        "phoneNumbers": "",
        "instagram": "",
        "telegram": "",
        "showPrice": true
    })

    useEffect(()=>{

        async function fetchData(){
            const info=await getInfo();
            if(info!=null)
            {
                setState(info)
            }

        }

        fetchData()
    },[])

    const handleSubmit=async e=>{
        e.preventDefault()

       const info=await setInfo(state);
        if(info==true)
        {
            toast.success('Saved')
        }
        else{
            toast.error('Failed to Save');
        }
    }
    return <>
        <div className="panel mt-5">
            <form method="post" onSubmit={handleSubmit}>

                <div className="form-group">
                    <label>شماره تماس</label>
                    <input type="text" value={state.phoneNumbers} className="form-control"
                           placeholder="شماره تماس"
                           onInput={e => setState({...state, phoneNumbers: e.target.value})}/>

                </div>

                <div className="form-group">
                    <label>ساعات کاری</label>
                    <input type="text" value={state.workours} className="form-control"
                           placeholder="ساعات کاری"
                           onInput={e => setState({...state, workours: e.target.value})}/>

                </div>


                <div className="form-group">
                    <label>آدرس</label>
                    <input type="text" value={state.address} className="form-control"
                           placeholder="آدرس"
                           onInput={e => setState({...state, address: e.target.value})}/>

                </div>


                <div className="form-group">
                    <label> تلگرام</label>
                    <input type="text" value={state.telegram} className="form-control"
                           placeholder="تلگرام"
                           onInput={e => setState({...state, telegram: e.target.value})}/>

                </div>


                <div className="form-group">
                    <label>اینستاگرام</label>
                    <input type="text" value={state.instagram} className="form-control"
                           placeholder="اینستاگرام"
                           onInput={e => setState({...state, instagram: e.target.value})}/>

                </div>

                <div className="form-group">
                    <label> نمایش قیمت</label>
                    <input type="checkbox" checked={state.showPrice}  className="form-check"
                           placeholder="شماره تماس"
                           onChange={e => setState({...state, showPrice: !state.showPrice})}/>

                </div>


                <button type={"submit"} className="btn btn-primary mt-3">ذخیره اطلاعات</button>
            </form>
        </div>
    </>
}