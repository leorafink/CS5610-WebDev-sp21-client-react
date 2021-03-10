import React from 'react'
import CounterDisplay from "./counter-display";
import CounterDown from "./counter-down";
import CounterUp from "./counter-up";
import {createStore} from "redux";
import {Provider} from "react-redux";

const initialState = {
    count: 1234
}

const reducer = (prevState = initialState, action ) => {
    switch (action.type) {
        case "UP":
            return {
                count: prevState.count + 1
            }
        case "DOWN":
            return {
                count: prevState.count - 1
            }
        default:
            return prevState
    }
}

const store = createStore(reducer)

export default class CounterRedux extends React.Component {
    render() {
        return(
            <Provider store={store}>
            <div>
                <CounterDisplay/>
                <CounterDown/>
                <CounterUp/>
            </div>
            </Provider>
        )
    }
}