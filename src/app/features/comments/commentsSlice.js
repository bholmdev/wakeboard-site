import { createSlice } from "@reduxjs/toolkit";
import { COMMENTS } from "../../shared/COMMENTS";

const initialState = {
    commentsArray: COMMENTS
};

const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        addComment: (state, action) => {
            const newComment = {
                id: state.commentsArray.length + 1,
                ...action.payload
            };
            state.commentsArray.push(newComment);
        }
    }
});

export const commentsReducer = commentsSlice.reducer;

export const { addComment } = commentsSlice.actions;

export const selectCommentsByParkId = parkId => state => {
    return state.comments.commentsArray.filter(
        comment => comment.parkId === parseInt(parkId)
    );
};

export const numberOfComments = COMMENTS.length;