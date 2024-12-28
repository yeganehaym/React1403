import {Link} from "react-router-dom";
import {getName} from "../Services/JwtService";
import {Authorize} from "../Components/Authorize";
import {useSelector} from "react-redux";

export function AdminLayout(props){

    const financial=useSelector((x)=>x.financial)

    return <>
        <Authorize>
            <div className={"bg-login"}>
                {
                    getName() != '' &&
                    <span>سلام {getName()}</span>


                }

                <span>موجودی کیف پول : {financial.wallet}</span>
                <div className="container position-relative">
                    <ul className=" bar d-flex justify-content-between flex-wrap pt-5 list-unstyled">
                        <li><Link to="/cats/new">افزودن گروه</Link></li>
                        <li><Link to="/cats/list">لیست گروه بندی</Link></li>
                        <li><Link to="/foods/new">افزودن غذا</Link></li>
                        <li><Link to="/foods/list">لیست غذا</Link></li>
                        <li><Link to="/password">تغییر کلمه عبور</Link></li>
                        <li><Link to="/webinfo">اطلاعات سایت</Link></li>
                        <li><Link to="/redux-test">ریداکس</Link></li>
                        <li><Link to="/logout">خروج</Link></li>
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
        </Authorize>

    </>

}