import {toast} from "react-toastify";

export function Admin(props) {

    return <>
        <div className={"bg-login"}>
            <div className="container position-relative">
                <ul className=" bar d-flex justify-content-between flex-wrap pt-5 list-unstyled">
                    <li><a href="#">افزودن گروه</a></li>
                    <li><a href="#">لیست گروه بندی</a></li>
                    <li><a href="#">افزودن غذا</a></li>
                    <li><a href="#">لیست غذا</a></li>
                    <li><a href="#">تغییر کلمه عبور</a></li>
                    <li><a href="#">خروج</a></li>
                </ul>
                <div className="space"></div>

                {/* eslint-disable-next-line react/prop-types */}
                {props.children}
            </div>

            <div className="footer-login">
                Created By <a href="https://www.aliyeganeh.ir">AliYeganeh.ir</a>
            </div>
        </div>
    </>
}