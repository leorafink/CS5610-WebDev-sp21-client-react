const initialState = {
    widgets: []
}

const widgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_WIDGET":
            return {
                ...state,
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
        case "FIND_WIDGET":
            return {
                ...state,
                widgets: action.widgets
            }
        case "DELETE_WIDGET":
            return {
                ...state,
                widgets: state.widgets.filter(widget => {
                    if(widget.id !== action.widgetToDelete.id) {
                        return true
                    } else {
                        return false
                    }
                })
            }
        case "UPDATE_WIDGET":
            return {
                ...state,
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.updateWidget.id){
                        return action.updateWidget
                    } else {
                        return widget
                    }
                })
            }
        default:
            return state
    }
}

export default widgetReducer