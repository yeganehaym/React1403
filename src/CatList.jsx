export function CatList(){

    return <>
        <div className="mt-5">
            <table className="table table-bordered table-striped">
                <thead>
                <tr>
                    <th>نام گروه</th>
                    <th>عملیات</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>سالاد</td>
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