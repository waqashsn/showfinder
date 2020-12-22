// default state
const defaultState = {
    keyword: undefined,
    shows: [],
    showModal: undefined,
    loading: false,
    error: undefined,

}

// reducer to handle show actions
export const showsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "GET_SHOWS":
            return {
                ...state,
                keyword: action.keyword,
                shows: action.shows
            }
        case "DISPLAY_SHOW":
            return {
                ...state,
                showModal: action.show
            }
        case "CLOSE_SHOW":
            return {
                ...state,
                showModal: undefined
            }
        case "SET_LOADING":
            return {
                ...state,
                loading: action.loading
            }
        case "SET_ERROR":
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}