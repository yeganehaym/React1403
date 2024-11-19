import {Link} from "react-router-dom";

export function AdminLayout(props){

    return <>
        <div className={"bg-login"}>
            <div className="container position-relative">
                <ul className=" bar d-flex justify-content-between flex-wrap pt-5 list-unstyled">
                    <li><Link to="/cats/new">افزودن گروه</Link></li>
                    <li><Link to="/cats/list">لیست گروه بندی</Link></li>
                    <li><Link to="/foods/new">افزودن غذا</Link></li>
                    <li><Link to="/foods/list">لیست غذا</Link></li>
                    <li><Link to="/counters/v1">تغییر کلمه عبور</Link></li>
                    <li><Link to="/login">خروج</Link></li>
                </ul>
                <div className="space"></div>

                {
                    props.children
                }

            </div>

            <div className="footer-login">
                Created By <a href="http://www.aliyeganeh.ir">AliYeganeh.ir</a>
            </div>

        </div>

    </>

}