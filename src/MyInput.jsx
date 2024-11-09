import {useState} from "react";

export function MyInput(props){

    const [value, setValue] = useState(props.value)


    function  handleInput(e){
        setValue(e.target.value);
        props.onInput(e);
    }
    return <>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">{props.icon}</span>
            <input type="text" className="form-control" placeholder={props.placeholder} aria-label="Username"
                   value={value}
                   name={props.name??''}

                   onInput={e=>handleInput(e)}
                   aria-describedby="basic-addon1"/>
        </div>
    </>
}