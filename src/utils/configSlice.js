import { createSlice } from "@reduxjs/toolkit";

const consfigSlice = createSlice({
    name: "config",
    initialState: {
        lang: "en",
    },
    reducers:{
        changeLanguage: (state, action) =>{
            state.lang = action.payload
        }
    }
})

export const {changeLanguage} = consfigSlice.actions;
export default consfigSlice.reducer;