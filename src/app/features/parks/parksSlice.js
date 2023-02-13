import { createSlice } from "@reduxjs/toolkit";
import { PARKS } from "../../shared/PARKS";

const initialState = {
    parksArray: PARKS
};

const parksSlice = createSlice({
    name: "parks",
    initialState
});

export const parksReducer = parksSlice.reducer;

export const selectAllParks = state => {
    return state.parks.parksArray;
};

export const selectParkById = id => state => {
    return state.parks.parksArray.find(
        park => park.id === parseInt(id)
    );
};

export const selectFeaturedPark = state => {
    return state.parks.parksArray.find(park => park.featured);
};