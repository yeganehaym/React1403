import {AddToWallet, SubFromWallet, UpdateWalletAmount} from "../Actions/FinancialActions";

const initialState = {
    wallet:5000
}

export const FinancialReducer = (state = initialState, action) => {

    switch (action.type) {
        case AddToWallet:
        {
            const newState={...state};
            newState.wallet+=action.payload;
            return newState;
        }

        case SubFromWallet:
        {
            const newState={...state};
            newState.wallet-=action.payload;
            return newState;
        }
        case UpdateWalletAmount:
        {
            const newState={...state};
            newState.wallet=action.payload;
            return newState;
        }
        default:
            return state;
    }
}