import {createSlice} from "@reduxjs/toolkit";
import {getFlights} from "../actions/index.js";

const initialState = {
    isLoading: true,
    error: null,
    flights:[],
}

const flightSlice = createSlice({
    name: "flights",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getFlights.pending, (state, action) => {
            state.isLoading = true;
        })

        builder.addCase(getFlights.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.flights = action.payload;
        })

        builder.addCase(getFlights.rejected, (state, {error}) => {
            state.isLoading = false;
            state.error = error.message;
        })
    }
})

export default flightSlice.reducer;