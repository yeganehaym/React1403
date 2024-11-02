
var moviespage1=[
    {id:1,name:'Inception',year:2010,score:12,director:'Nolan'},
    {id:2,name:'Shutter Island',year:2010,score:4.1,director:'Scorsessi'},
    {id:3,name:'Prestige',year:2006,score:5.1,director:'Nolan'},
    {id:4,name:'Tenet',year:2023,score:9,director:'Nolan'},
    {id:5,name:'Transformer',year:2005,score:3,director:'Scott'}
];

var moviespage2= [
    {id:6,name:'Life Is Beutiful',year:1990,score:12,director:'x'},
    {id:7,name:'Grapes Of wrath',year:1940,score:4.1,director:'ford'},
    {id:8,name:'StageCoach',year:1938,score:5.5,director:'ford'},
    {id:9,name:'Harry potter 1',year:2023,score:6,director:'z'},
    {id:10,name:'Harry potter 2',year:2005,score:7,director:'m'}
];

export function getMovies(page){

    if(page==1)
    {
        return moviespage1
    }

    else{
        return moviespage2
    }

}

export function deleteMovie(id){

    return  false;
    moviespage1=moviespage1.filter(m=>m.id !== id);
    moviespage2=moviespage2.filter(m=>m.id !== id);

    return true;
}

export function sum(a,b)
{
    return a+b;
}

export function div(a,b)
{
    return a/b;
}