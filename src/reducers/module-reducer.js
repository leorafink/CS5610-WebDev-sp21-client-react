const initialState = {
    modules: [
        {title: 'CS5610', _id: '123'},
        {title: 'CS5200', _id: '234'},
        {title: 'CS3670', _id: '567'},
    ]
}

const moduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_MODULE":
            const newModule = {
                title: "New Module",
                _id: (new Date()).getTime()
            }
            return {
                ...state,
                modules: [
                    ...state.modules,
                    newModule
                ]
            }
        case "DELETE_MODULE":
        case "UPDATE_MODULE":
        default:
            return state
    }
}

export default moduleReducer