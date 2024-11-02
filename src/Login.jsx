import 'bootstrap/dist/css/bootstrap.min.css'
import {useState} from "react";


export function Login(){



    const [login,setLogin]=useState({
        username:'',
        password:''
    });


    return<>
    <h1>Login</h1>

        <form>
            <div>
                <lable>Username:</lable>
                <input type={"text"} className={"form-control"} value={login.username} onInput={e=>setLogin({username: e.target.value})}/>
            </div>

            <div>
                <lable>Password:</lable>
                <input type={"password"} className={"form-control"} value={login.password} onInput={e=>setLogin({password:e.target.value})}/>
            </div>
            <div className={"mt-3"}>
                <button type={"submit"} className={"btn btn-primary"}>Login</button>
            </div>
        </form>
    </>
}