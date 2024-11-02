import {Component} from "react";
import '@fortawesome/fontawesome-free/css/all.min.css'
import './RatingBar.css'
export class RatingBar extends Component{

    state={
        stars:this.props.count??10,
        score:this.props.score??0
    }

    onStar=(star)=>{
       this.setState({score:star})
        this.props.onStar(star);

    }

    makeStar=(star)=>
    {

        var mod=this.state.score%1;
        var intPart=this.state.score-mod;

        if(mod>0 && (intPart+1)==star)
        {

                return <i key={star} onClick={() => this.onStar(star)}
                          className={"fa fa-star-half fullstar"}/>
        }


        if(star<=this.state.score) {
            return <i key={star} onClick={() => this.onStar(star)}
                      className={"fa fa-star fullstar"}/>
        }
        if(star>this.state.score) {
            return <i key={star} onClick={() => this.onStar(star)}
                      className={"far fa-star fullstar"}/>
        }


    }

    render() {

        var array = [];

        for (var i = 1; i <= this.state.stars; i++) {
            array.push(i)
        }
        return<>

            {
                array.map(star=>this.makeStar(star) )

            }
        </>
    }
}