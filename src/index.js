import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Counter} from "./Counter";
import {Counter2} from "./Counter2";
import {AdminLayout} from "./Layouts/AdminLayout";
import {NewCat} from "./NewCat";
import {NewFood} from "./NewFood";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import {NotFound} from "./NotFound";
import {FoodList} from "./FoodList";
import CatList from "./CatList";
import {Calendar} from "./Calendar";
import {Home} from "./Components/Home/Home";
import {Login} from "./Components/Login";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css'
import {Authorize} from "./Components/Authorize";
import {Logout} from "./Components/Logout";
import {MouseLocation} from "./Components/Shared/MouseLocation";
import {Cursor} from "./Components/Shared/Cursor";
import {WebStatus} from "./Components/Shared/WebStatus";
import {GeoLocation} from "./Components/GeoLocation";
import {Parent} from "./Components/TestUseContext/Parent";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {Reducer} from "./Reducer";
import ReduxTest from "./Components/ReduxTest";


const root = ReactDOM.createRoot(document.getElementById('root'));

const store=createStore(Reducer)
root.render(
  <>
   <Provider store={store}>
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

               <Route path={"/cats/new"} element={
                   <AdminLayout>
                       <NewCat></NewCat>
                   </AdminLayout>
               }></Route>

               <Route path={"/cats/edit/:id"} element={ <AdminLayout>
                   <NewCat></NewCat>
               </AdminLayout>}></Route>


               <Route path={"/login"} element={<Login></Login>}></Route>
               <Route path={"/foods/list"} element={<AdminLayout><FoodList></FoodList></AdminLayout>}></Route>
               <Route path={"/cats/list"} element={
                   <AdminLayout><CatList></CatList></AdminLayout>
               }></Route>

               <Route path={"/cal"} element={<Calendar></Calendar>}></Route>
               <Route path={"/logout"} element={<Logout></Logout>}></Route>

               <Route path={"/mouse"} element={<MouseLocation></MouseLocation>}/>
               <Route path={"/cursor"} element={<Cursor></Cursor>}/>
               <Route path={"/geo"} element={<GeoLocation></GeoLocation>}/>
               <Route path={"/parent"} element={<Parent></Parent>}/>
               <Route path={"/redux-test"} element={

                   <AdminLayout>
                       <ReduxTest></ReduxTest>
                   </AdminLayout>
               }/>
               <Route path={"*"} element={<NotFound></NotFound>}></Route>


           </Routes>
       </BrowserRouter>

       <WebStatus />
       <ToastContainer/>
   </Provider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
