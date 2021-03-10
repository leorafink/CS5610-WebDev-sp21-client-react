const initialState = {
    count: 1234
}

const reducer = (prevState = initialState, action ) => {
    switch (action.type) {
        case "CLEAR":
            return {
                count: 0
            }
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

export default reducer