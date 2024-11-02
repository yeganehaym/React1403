import {Component} from "react";

export class Test extends Component{

    state={
        value:''
    }

    onChange=(e)=>{
        this.setState({value:e.target.value});
    }

    render() {
        return <>
            <input type="text" id="myinput" placeholder="write here ..." onInput={this.onChange}/>
            <input type="text" id="myinput2" placeholder={this.state.value}/>

            <p className="alert alert-success" >{this.state.value}</p>
            <p className="alert alert-warning" >{this.state.value}</p>
            <p className="alert alert-danger" >{this.state.value}</p>
            {this.state.value}
            <br/>
            {this.state.value}
        </>
    }
}