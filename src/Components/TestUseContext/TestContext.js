import {createContext} from "react";

export const testContext=createContext({});
export const TestContextProvider=testContext.Provider;
export const TestContextConsumer=testContext.Consumer;