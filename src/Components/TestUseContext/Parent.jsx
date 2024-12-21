import {Child1} from "./Child1";
import {Child2} from "./Child2";
import {TestContextProvider} from "./TestContext";
import {useEffect, useState} from "react";

export const Parent=()=>{

    const [value,setValue]=useState('ali');
    const [theme,setTheme]=useState('dark');

    const getThemeMode=()=>{
        if(theme=='dark'){
            return 'navbar-dark bg-dark'
        }
        return 'navbar-light bg-light';
    }

    const saveTheme=(theme)=>{
        setTheme(theme);
        localStorage.setItem("theme",theme);
    }

    useEffect(()=>{
        const theme=localStorage.getItem("theme");
        setTheme(theme);
    },[])
    return<>
        <TestContextProvider value={{value, setValue,theme,setTheme:saveTheme}}>
            <nav className={"navbar navbar-expand-lg  " + getThemeMode()} style={{direction:'ltr'}}>
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <div style={{direction: "ltr", margin: "25px"}}>
                <h1>
                    Parent
                </h1>

                <Child1></Child1>
                <Child2></Child2>
            </div>
        </TestContextProvider>
    </>
}