import {useContext, useState} from "react";
import {TestContextConsumer} from "./TestContext";

export const Child2=()=>{
    const testContext=useContext(TestContextConsumer);
    const [inputValue,setInputValue]=useState('');


    return <>
        <div className={"border-1 border-black"}>
            <h1>Child 2</h1>
            <input type={"text"} placeholder={"Enter your words"} onInput={e=>setInputValue(e.target.value)} />
            <button className={"btn btn-primary"} onClick={()=>testContext.setValue(inputValue)}>Change </button>
            
            <select onChange={e=>testContext.setTheme(e.target.value)}>
                <option selected={testContext.theme=='dark'} value={"dark"}>Dark Mode</option>
                <option selected={testContext.theme=='light'} value={"light"}>Light Mode</option>
            </select>
        </div>
        </>
        }