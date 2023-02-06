import { Col } from "reactstrap";
import Comment from "./Comment";
import { selectCommentsByParkId } from "./commentsSlice";

const CommentsList = ({ parkId }) => {
    const comments = selectCommentsByParkId(parkId);

    if (comments && comments.length > 0) {
        return (
            <Col
                md="5"
                className="m-1"
            >
                <h4>Comments</h4>
                {comments.map(comment => {
                    return <Comment key={comment.id} comment={comment} />
                })}
            </Col>
        );
    }

    return (
        <Col
            md="5"
            className="m-1"
        >
            There are no comments for this park yet.
        </Col>
    );
};

export default CommentsList;