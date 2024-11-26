import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Counter} from "./Counter";
import {Movies} from "./Movies";
import {RatingBar} from "./RatingBar";
import {Test} from "./Test";
import {Buttons} from "./Buttons";
import {Like} from "./Like";
import {Login} from "./Login";
import {Counter2} from "./Counter2";
import {Login2} from "./Login2";
import {AdminLayout} from "./Layouts/AdminLayout";
import {NewCat} from "./NewCat";
import {NewFood} from "./NewFood";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import {NotFound} from "./NotFound";
import {FoodList} from "./FoodList";
import {CatList} from "./CatList";
import {Calendar} from "./Calendar";
import {Home} from "./Components/Home/Home";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   <BrowserRouter>
       <Routes>

           <Route path={"/counter/v1"} element={<Counter></Counter>}></Route>
           <Route path={"/counter/v2"} element={<Counter2></Counter2>}></Route>
           <Route path={"/"} element={ <Home></Home>}></Route>
           <Route path={"/foods/new"} element={ <AdminLayout>
               <NewFood></NewFood>
           </AdminLayout>}></Route>

           <Route path={"/foods/edit/:id"} element={ <AdminLayout>
               <NewFood></NewFood>
           </AdminLayout>}></Route>

           <Route path={"/cats/new"} element={ <AdminLayout>
               <NewCat></NewCat>
           </AdminLayout>}></Route>

           <Route path={"/cats/edit/:id"} element={ <AdminLayout>
               <NewCat></NewCat>
           </AdminLayout>}></Route>


           <Route path={"/login"} element={<AdminLayout><Login></Login></AdminLayout>}></Route>
           <Route path={"/foods/list"} element={<AdminLayout><FoodList></FoodList></AdminLayout>}></Route>
           <Route path={"/cats/list"} element={<AdminLayout><CatList></CatList></AdminLayout>}></Route>

           <Route path={"/cal"} element={<Calendar></Calendar>}></Route>

           <Route path={"*"} element={<NotFound></NotFound>}></Route>


       </Routes>
   </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
