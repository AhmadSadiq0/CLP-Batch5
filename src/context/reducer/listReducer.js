import { ADD_ITEM, CLEAR_LIST, DELETE_BY_VALUE, DELETE_ITEM, SET_LIST } from '../actionType'

const listReducer = (state, action) => {
    switch (action.type) {
        case ADD_ITEM:
            let newState = [...state]
            newState.push(action.payload)
            return newState
        case DELETE_ITEM:
            newState = [...state]
            newState.pop()
            return newState
        case DELETE_BY_VALUE:
            newState = [...state]
            return newState.filter((item) => item != action.payload)

        default:
            return state

    }
}

export default listReducer