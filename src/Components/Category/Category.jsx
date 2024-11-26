export function Category(props){

    return <>
        <div>
            <div className="cat-item">
                <div className="cat-item-image" style={{backgroundImage:'url("http://localhost:3000/images/'+props.cat.image+'")'}}>
                    <span>{props.cat.title}</span>

                </div>
            </div>
        </div>
    </>
}