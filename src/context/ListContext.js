import { createContext, useReducer } from "react";
import listReducer from "./reducer/listReducer";
import { ADD_ITEM, SET_LIST } from "./actionType";

export const ListContext = createContext()

const ListContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(listReducer, [])

    //actions
    const addItem = (item) => {
        dispatch({ type: ADD_ITEM, payload: item })
    }


    return (
        <ListContext.Provider value={{ state, addItem }}>
            {children}
        </ListContext.Provider>
    )
}
export default ListContextProvider

