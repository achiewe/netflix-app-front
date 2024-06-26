import { configureStore } from "@reduxjs/toolkit";
import OpenBurgerSlice, { BurgerProps } from "./OpenBurgerSlice";

// store for every states
const store = configureStore({
    reducer:{
        openFrame:OpenBurgerSlice
    }
})

// export type state to use it in the project
export type RootState = {
    openFrame:BurgerProps
}

export default store