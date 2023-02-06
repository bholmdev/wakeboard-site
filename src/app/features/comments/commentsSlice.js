import { COMMENTS } from "../../shared/COMMENTS";

export const selectCommentsByParkId = parkId => {
    return COMMENTS.filter(comment => comment.parkId === parseInt(parkId))
};