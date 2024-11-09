import {useState} from "react";

export function Counter2(props){

    const [count,setCount]=useState(props.count??0);

    function add(){
        setCount(count+(props.step??1));
    }

    function Dec(){
        setCount(count-(props.step??1));
    }

    return <>
    <h1>Counter2</h1>
        <span>{count}</span>

        <div>
            <button className={"btn btn-primary"} onClick={add}>Add</button>
            <button className={"btn btn-danger"} onClick={Dec}>Dec</button>
        </div>
    </>
}