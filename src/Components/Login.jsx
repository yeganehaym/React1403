import {useState} from "react";
import * as authService from "../Services/AuthenticationService";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

export function Login(){

    const navigate = useNavigate();
    const [login, setLogin] = useState({
        username:'',
        password:''
    });

    function handleInput(e){
        const mylogin={...login};
        mylogin[e.target.name]=e.target.value;
        setLogin(mylogin)
    }

    async function handleSubmit(e){
        e.preventDefault();

        var result=await authService.login(login)
        if(result)
        {
            navigate("/cats/list",{
                replace:true
            })
            toast.success("Welcome")
        }
        else{
            toast.error("Login failed");
        }
    }
    return <>
        <div className={"bg-login"}>
            <div className="login-box">
                <form method="post" onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <label htmlFor="floatingInput">نام کاربری</label>

                        <input type="text" value={login.username} onInput={handleInput} name={"username"} className="form-control" id="floatingInput" placeholder="نام کاربری"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="floatingPassword">کلمه عبور</label>

                        <input type="password" value={login.password} onInput={handleInput} name={"password"} className="form-control" id="floatingPassword" placeholder="کلمه عبور"/>
                    </div>

                    <div className="form-group mt-4">
                        <button type="submit" className="btn btn-secondary">ورود به سیستم</button>
                    </div>
                </form>
            </div>
        </div>
    </>
}