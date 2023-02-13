import { createSlice } from "@reduxjs/toolkit";
import { SPONSORS } from "../../shared/SPONSORS";

const initialState = {
    sponsorsArray: SPONSORS
};

const sponsorsSlice = createSlice({
    name: "sponsors",
    initialState
});

export const sponsorsReducer = sponsorsSlice.reducer;

export const selectAllSponsors = state => {
    return state.sponsors.sponsorArray;
};

export const selectFeaturedSponsor = state => {
    return state.sponsors.sponsorsArray.find(
        sponsor => sponsor.featured
    );
};