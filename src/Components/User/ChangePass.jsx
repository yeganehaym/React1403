import {useState} from "react";
import {changePassword} from "../../Services/SettingService";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

export const ChangePass=()=>{

    const [state,setState]=useState({
        currentPassword:'',
        newPassword:'',
        reNewPassword:'',
    })

    const navigate = useNavigate();
    const handleSubmit= async (e)=>{
        e.preventDefault();

        var result=await changePassword(state);

        if(result.success==true)
        {
            navigate('/logout');
        }
        else{
            toast.error(result.message);
        }
    }
    return <>
        <div className="panel mt-5">
            <form method="post" onSubmit={handleSubmit}>

                <div className="form-group">
                    <label>کلمه عبور جاری</label>
                    <input type="password" value={state.currentPassword} className="form-control"
                           placeholder="کلمه عبور جاری"
                           onInput={e => setState({...state, currentPassword: e.target.value})}/>

                </div>

                <div className="form-group">
                    <label>کلمه عبور جدید</label>
                    <input type="password" value={state.newPassword} className="form-control"
                           placeholder="کلمه عبور جدید"
                           onInput={e => setState({...state, newPassword: e.target.value})}/>

                </div>

                <div className="form-group">
                    <label>کلمه عبور جدید</label>
                    <input type="password" value={state.reNewPassword} className="form-control"
                           placeholder="تکرار کلمه عبور جدید"
                           onInput={e => setState({...state, reNewPassword: e.target.value})}/>

                </div>

                <button type={"submit"} className="btn btn-primary mt-3">تغییر کلمه عبور</button>
            </form>
        </div>
        </>
        }