import {createSlice} from "@reduxjs/toolkit";


const initialState  = {
    busketArr: []
}

const busketSlice = createSlice({
    name: 'busSlice',
    initialState,
    reducers: {
        setBus: (state, action) => {
            state.busketArr.push(action.payload)
        }
    }
})

export default busketSlice.reducer;
export const {setBus} =  busketSlice.actions;
export const busSelect = state => state.busketSlice;