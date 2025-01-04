import {ChangeFoodCategory} from "../Actions/FoodsActions";

const initialState = {
    catId:0
}

export const FoodReducer = (state = initialState, action) => {

    switch (action.type)
    {
        case ChangeFoodCategory:
            const mystate={...state}
            mystate.catId=action.payload;
            return mystate;
        default:
            return state;
    }
}