import {Component} from "react";
import '@fortawesome/fontawesome-free/css/all.min.css'
import './Like.css'
export class Like extends Component{

    state={
        liked:false
    }

    setLike=(b)=>{
        this.setState({liked:b})
    }
    getHeart=()=>{

        if(this.state.liked)
        {
            return <i className={"fa fa-heart"} onClick={()=>this.setLike(false)} />
        }
        else{
            return <i className={"far fa-heart"} onClick={()=>this.setLike(true)} />

        }
    }
    render() {
        return <>
            {this.getHeart()}
        </>
    }
}