import {useState} from "react";

export function Login2(){

    const [login,setLogin] = useState({
        mobile:'',
        otp:'',
        isOtp:false
    });


    return <>
        <form>


                <div>
                    <input disabled={login.isOtp} type={"text"} className={"form-control"} placeholder={"Mobile"} value={login.mobile}
                           onInput={e => setLogin({...login, mobile: e.target.value})}/>

                </div>

            {
                login.isOtp == true &&
                <div className={"mt-3"}>
                    <input type={"password"} className={"form-control"} placeholder={"OTP"} value={login.otp}
                           onInput={e => setLogin({...login, otp: e.target.value})}/>
                </div>
            }

            <div className={"mt-3"}>
                <button type={"button"} className={"btn btn-primary"} onClick={()=> setLogin({...login,isOtp:!login.isOtp})}>
                    {login.isOtp ? "Login" : "Send Mobil Number"}
                </button>
            </div>
        </form>
    </>
}