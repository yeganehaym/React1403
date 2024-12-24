import {combineReducers} from "redux";
import {ThemeReducer} from "./ThemeReducer";
import {FoodReducer} from "./FoodReducer";
import {FinancialReducer} from "./FinancialReducer";

export const Reducer=combineReducers({
    theme:ThemeReducer,
    food:FoodReducer,
    financial:FinancialReducer
})