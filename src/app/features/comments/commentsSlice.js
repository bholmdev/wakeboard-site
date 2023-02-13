import { createSlice } from "@reduxjs/toolkit";
import { COMMENTS } from "../../shared/COMMENTS";

const initialState = {
    commentsArray: COMMENTS
};

const commentsSlice = createSlice({
    name: "comments",
    initialState
});

export const commentsReducer = commentsSlice.reducer;

export const selectCommentsByParkId = parkId => state => {
    return state.comments.commentsArray.filter(
        comment => comment.parkId === parseInt(parkId)
    );
};

export const numberOfComments = COMMENTS.length;