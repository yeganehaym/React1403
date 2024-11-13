import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.rtl.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import "./styles/index.css"
import { Admin } from "./layoutes/Admin.jsx";
import { NewCat } from "./utility/NewCat.jsx";
import { NewFood } from "./utility/NewFood.jsx";
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Admin>
            <NewFood />
            <NewCat />
        </Admin>
    </StrictMode>,
)
