import {Component} from "react";
import {Link} from "react-router-dom";

export class MouseLocation extends Component {

    state={
        x:0,
        y:0
    }

    componentDidMount() {
        window.addEventListener('mousemove', this.onMouseMove);
    }

    componentWillUnmount() {
        window.removeEventListener('mousemove', this.onMouseMove);
    }

    onMouseMove = (e) => {
        //const x=e.clientX;
       // const y=e.clientY;

        const {clientX:x, clientY:y} = e;
        this.setState({x,y})
        console.log({x,y})
    }

    render() {

        return (<>
        <p style={{display:'flex',justifyContent:'center'}}>
            <strong style={{direction:'ltr'}}>{this.state.x} x {this.state.y}</strong>
        </p>

            <Link to={"/login"}>Login</Link>
        </>)
    }
}