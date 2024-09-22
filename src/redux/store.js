import flightReducer from "./slices/flightSlice.js";
import {configureStore} from "@reduxjs/toolkit";
import infoReducer from "./slices/infoSlice.js";


const store = configureStore({
    reducer: {
        flight: flightReducer,
        info: infoReducer,
    }
});

export default store;

