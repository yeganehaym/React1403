import {useState} from "react";
import {MyInput} from "./MyInput";

export function Login(){

    const [login,setLogin] = useState({
        first_name:"",
        last_name:"",
        username:'',
        password:'',
    });

    function  handleLogin(e){
        const copy={...login};
        const name=e.target.name;
        copy[name]=e.target.value;
        setLogin(copy)
    }

    return <>
        <form>
            <div>
                <MyInput  name={"first_name"} placeholder={"Name"} value={login.first_name}
                       onInput={e=>handleLogin(e)}
                          icon={"#"}
                      />

            </div>
            <div>
                <MyInput placeholder={"Family"} value={login.last_name} name={"last_name"}
                       onInput={e=>handleLogin(e)}
                         icon={"!"}
                      />

            </div>

            <div>
                <MyInput   placeholder={"Username"} value={login.username} name={"username"}
                       onInput={e=>handleLogin(e)}
                           icon={"@"}
                       />

            </div>
            <div className={"mt-3"}>
                <input type={"password"} className={"form-control"} placeholder={"Password"} value={login.password}
                       name={"password"}
                       onInput={e=>handleLogin(e)}
                       />
            </div>
            <div className={"mt-3"}>
                <button type={"submit"} className={"btn btn-primary"}>Login</button>
            </div>
        </form>
    </>
}