import {createSlice} from "@reduxjs/toolkit";
import {getFlights, getInfo} from "../actions/index.js";


const initialState = {
    isLoading: false,
    error: null,
    info: null,
    route: [],
}

const infoSlice = createSlice({
    name: "info",
    initialState: initialState,
    reducers: {
        clearRoute: (state) => {
            state.route = null;
        }
    },

    extraReducers: (builder) => {
        builder.addCase(getInfo.pending, (state) => {
            state.isLoading = true;
        })

        builder.addCase(getInfo.rejected, (state, {error}) => {
            state.isLoading = false;
            state.error = error.message;
        })

        builder.addCase(getInfo.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.info = action.payload;
            state.route = action.payload.trail;
        })

    }
})

export const {clearRoute} = infoSlice.actions;

export default infoSlice.reducer;