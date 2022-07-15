import { configureStore } from "@reduxjs/toolkit";
import filter from './reducers/filter'
import trash from "./reducers/trashSlice";
import pizzaSlice from "./reducers/pizzaSlice";
import { useDispatch } from "react-redux";

 const store = configureStore({
    reducer:{
        filter,
        trash,
        pizzaSlice,
    }
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch 
export default store