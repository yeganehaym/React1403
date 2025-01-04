export function Category(props){

    return <>
        <div onClick={()=>props.onClick(props.cat)} >
            <div className="cat-item">
                <div className="cat-item-image" style={{backgroundImage:'url("'+ 'https://reactapi.aliyeganeh.ir/api/showcatimage?id=' + props.cat.id +'")'}}>
                    <span>{props.cat.name}</span>

                </div>
            </div>
        </div>
    </>
}