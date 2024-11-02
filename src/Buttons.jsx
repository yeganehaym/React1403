import {Component} from "react";

export class Buttons extends Component {

    state={
        clicked:false
    }

    clickOnButton=()=>{
        if(this.state.clicked){
            this.setState({clicked:false});
        }
        else{
            this.setState({clicked:true});
        }
    }

    getClass=()=>{
        return this.state.clicked?"btn btn-success":"btn btn-primary";

    }
    render() {
        return <>
            <button className={this.getClass()} onClick={this.clickOnButton} >Button1</button>
        </>
    }
}