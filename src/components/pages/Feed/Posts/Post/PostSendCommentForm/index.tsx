import React from "react";
import { useAppDispatch } from "../../../../../../redux/configureStore";
import { sendPostCommentAPI } from "../../../../../../redux/reducers/postCommentReducer";
import { Post } from "../../../../../../redux/reducers/postReducer/interfaceHeroes";
import { updateIsTyping } from "../../../../../../redux/reducers/UIReducer";

interface PostSendCommentInterface {
  post: Post;
}
let timeOut = null;
function PostSendCommentForm(props: PostSendCommentInterface) {
  const dispatch = useAppDispatch();
  const [comment, setComment] = React.useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setComment(event.target.value);

    dispatch(updateIsTyping(true));

    if (timeOut !== null) {
      clearTimeout(timeOut);
      timeOut = null;
    }

    timeOut = setTimeout(() => {
      dispatch(updateIsTyping(false));
    }, 1000);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    dispatch(sendPostCommentAPI(props.post, comment));
  }

  return (
    <div className="post-send-comment">
      <div className="post-send-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Write your comment"
            onChange={handleChange}
            value={comment}
          />
        </form>
      </div>
    </div>
  );
}

export default PostSendCommentForm;
