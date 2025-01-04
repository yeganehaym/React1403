import {AddToWallet} from "./FinancialActions";

export const ChangeFoodCategory='UPDATE_CATEGORY';

export const ChangeFoodCategoryAction=(catId)=>{
    return {
        type:ChangeFoodCategory,
        payload:catId
    }
}