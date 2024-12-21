import {useContext} from "react";
import {TestContextConsumer} from "./TestContext";

export const Child1=()=>{

    const testContext=useContext(TestContextConsumer);
    return<>
        <div className={"border-1 border-black"}>
            <h1>Child 1 Value Is {testContext.value} </h1>
        </div>
    </>
}