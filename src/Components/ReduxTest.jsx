import {useState} from "react";
import {useDispatch} from "react-redux";
import {
    AddToWallet,
    AddToWalletAction,
    SubFromWallet,
    SubFromWalletAction, UpdateWalletAction,
    UpdateWalletAmount
} from "../Actions/FinancialActions";

const ReduxTest=()=>{

    const [state,setState]=useState(0);

    const dispatch=useDispatch();

    return<>

        <input type={"number"} className={"form-control"} value={state} onInput={e=>setState(e.target.value)}/>
        <button className={"btn btn-primary"} onClick={()=>dispatch(AddToWalletAction(state))}>Add To Wallet</button>
        <button className={"btn btn-warning"} onClick={()=>dispatch(SubFromWalletAction(state))}>Sub From Wallet</button>
        <button className={"btn btn-success"} onClick={()=>dispatch(UpdateWalletAction(state))}>Update Wallet</button>
    </>
}

export default ReduxTest;