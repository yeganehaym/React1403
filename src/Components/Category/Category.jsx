export function Category(props){

    return <>
        <div>
            <div className="cat-item">
                <div className="cat-item-image" style={{backgroundImage:'url("http://localhost:3000/images/'+ '1.jpg' +'")'}}>
                    <span>{props.cat.name}</span>

                </div>
            </div>
        </div>
    </>
}