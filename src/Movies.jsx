import {Component} from "react";
import {MovieRow} from "./MovieRow";
import * as movieService from "./FakeService/MovieService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class Movies extends Component{

    state={
        topMovie:  {id:1,name:'Inception',year:2010,score:12,director:'Nolan'},
        todo:['Task1','Task2','task3','task4','task5','task6','task7','task8','task9'],


        movies:[],
        page:1
    }

    //============ Hooks =======================

    componentDidMount() {

        this.loadData()

    }

    componentDidUpdate(prevProps, prevState) {

        if(prevState.page!=this.state.page)
        {
            this.loadData();
        }
    }


    //========================= Data Functions ========================

    loadData=()=>{
        const movies=movieService.getMovies(this.state.page);

        this.setState({movies})
    }

    updateScore=(id,star)=>{



        const mymovies=[...this.state.movies];
        for (var i=0;i<mymovies.length;i++)
        {
            if(mymovies[i].id===id)
            {
                mymovies[i].score=star;
                break;
            }
        }

        this.setState({movies:mymovies});
    }

    changePage=(page)=>{
        this.setState({page});

    }

    deleteMovie=(movie)=>{
        var result=movieService.deleteMovie(movie.id);
        if(result==true)
        {
            var movies=[...this.state.movies];
            movies=movies.filter(m=>m.id !==movie.id);
            this.setState({movies});
        }
        else{
            toast.error("Delete Failed",{
                position:"bottom-right",
                autoClose:2000,
                closeOnClick:true,

            })
        }


    }




    //==================== Render Functions ======================


    getMovie=(movie)=> {
        return <MovieRow key={movie.id}
                         onStar={(id,star)=>this.updateScore(id,star)}
                         movie={movie}
                         onDelete={(movie)=>this.deleteMovie(movie) }/>
    }


    render() {


        return <>
            <table className={"table table-bordered table-striped"}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Score</th>
                    <th>Year</th>
                    <th>Director</th>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>

            {
                this.state.movies.map(movie => {return this.getMovie(movie)})
            }

            </tbody>
        </table>

            <button className={"btn btn-success"} onClick={()=>this.changePage(1)}>Page1</button>
            <button className={"btn btn-success"} onClick={()=>this.changePage(2)}>Page2</button>

            <ul>
                {
                    this.state.todo.map(t => <li key={t}>{t}</li>)
                }
            </ul>

            <ToastContainer />
        </>
    }
}