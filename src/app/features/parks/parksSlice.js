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

export const selectAllParks = () => {
    return PARKS;
};

export const selectParkById = (id) => {
    return PARKS.find(park => park.id === parseInt(id));
};

export const selectFeaturedPark = () => {
    return PARKS.find(park => park.featured);
};