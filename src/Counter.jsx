import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

export class Counter extends Component {

    state={
        count:this.props.start??0,
    }

    add=(step)=>{

        this.setState({count:this.state.count+step})

    }

    sub=(step)=>{
        var c=this.state.count-step;
        this.setState({count:c})
    }

    number=()=>{
        if(this.state.count>0) {
            return <div
                className={"fs-1 text-bg-success"}>{this.state.count}</div>
        }
        else if(this.state.count<0)
        {
            return <div
                className={"fs-1 text-bg-danger"}>{this.state.count}</div>
        }

        return <div
            className={"fs-1 text-bg-warning"}>{this.state.count}</div>
    }



    render() {
        return <>
            <h1>Counter</h1>
            {
                this.number()
            }
            <button onClick={()=>{this.add(this.props.step??1)}} className={"btn btn-primary"}>Add</button>
            <button onClick={()=>{this.sub(this.props.step??1)}} className={"btn btn-primary"}>Minus</button>
        </>
    }
}