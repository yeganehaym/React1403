export function Food(props){

    return <>
        <div className="col-lg-4">
        <div className="food-item">
            <div className="col-auto">
                <img className="food" src="/images/4 (1).jpg"/>
            </div>
            <div className="col ms-3 d-flex flex-column justify-content-between">
                <div>
                    <h4>{props.food.title}</h4>
                    <span className="materials">{props.food.materials}</span>
                </div>

                <div className="price">
                    <span>{props.food.price}</span>
                </div>
            </div>
        </div>
        </div>
    </>
}