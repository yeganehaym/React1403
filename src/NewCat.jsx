export function NewCat(props){

    return <>

        <div className="panel mt-5">
            <form method="post">
                <div className="form-group">
                    <label>نام گروه</label>
                    <input type="text" className="form-control" placeholder="مثال : سالاد"/>

                </div>

                <div className="form-group">
                    <label>ترتیب نمایش</label>
                    <input type="number" className="form-control" value="1"/>
                </div>

                <div className="form-group">
                    <label>تصویر</label>
                    <input type="file" className="form-control"/>

                </div>

                <div className="form-group mt-3">
                    <button className="btn btn-secondary" type="submit">ثبت</button>
                </div>


            </form>
        </div>
    </>
}