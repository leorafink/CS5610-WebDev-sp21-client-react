import React from 'react'
import CounterDisplay from "./counter-display";
import CounterDown from "./counter-down";
import CounterUp from "./counter-up";

const initialState = {
    count: 234
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

export default class CounterRedux extends React.Component {
    render() {
        return(
            <div>
                <CounterDisplay/>
                <CounterDown/>
                <CounterUp/>
            </div>
        )
    }
}