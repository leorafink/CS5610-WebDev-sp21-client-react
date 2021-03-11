const initialState = {
    lessons: []
}

const lessonReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FIND_LESSONS":
            return {
                ...state,
                lessons: action.lessons
            }
        case "CREATE_LESSON":
        case "DELETE_LESSON":
        case "UPDATE_LESSON":
        default:
            return state
    }
}

export default lessonReducer