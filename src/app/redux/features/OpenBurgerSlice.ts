import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// state type
export interface BurgerProps{
    openFrame:boolean
}


// write initial type of the state
const initialState:BurgerProps = {
    openFrame:true
};


// object createSlice where is properties to use it
const OpenBurgerSlice = createSlice({
    name:"openFrame",
    initialState,
    reducers:{
        setOpenFrame:(state, action:PayloadAction<boolean>) => {
            state.openFrame = action.payload
        }
    }
})

//export setState
export const {setOpenFrame} = OpenBurgerSlice.actions
export default OpenBurgerSlice.reducer