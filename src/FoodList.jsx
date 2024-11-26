import {Categories} from "./Components/Category/Categories";

export function FoodList(){

    return <>
        <Categories/>

        <div className="mt-5">
            <table className="table table-bordered table-striped">
                <thead>
                <tr>
                    <th>نام غذا</th>
                    <th>گروه غذا</th>
                    <th>قیمت غذا</th>
                    <th>عملیات</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>پیتزا سبزیجات</td>
                    <td>پیتزا</td>
                    <td>250 هزار تومان</td>
                    <td>
                        <a href="#" className="btn btn-warning">ویرایش</a>
                        <button className="btn btn-danger">حذف</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </>
}