import {Component} from "react";
import {RatingBar} from "./RatingBar";

export class MovieRow extends Component{

    render() {
        return <tr>
            <td>{this.props.movie.name}</td>
            <td>
                <RatingBar onStar={(star)=>this.props.onStar(this.props.movie.id,star)} count={10} score={this.props.movie.score} /> {this.props.movie.score}
            </td>
            <td>{this.props.movie.year}</td>
            <td>{this.props.movie.director}</td>
            <td>
                <button className={"btn btn-danger"} onClick={()=> this.props.onDelete(this.props.movie)}>
                    <i className={"fa fa-trash"}/> Delete
                </button>
            </td>
        </tr>
    }
}