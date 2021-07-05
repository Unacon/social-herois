import { PostCommentState } from "./interfaceHeroes";
import postCommentAPI from "./api";
import { Post } from "../postReducer/interfaceHeroes";
import { RootState } from "../../configureStore";
import { creatComment } from "./helpers";

export const POST_COMMENT_ACTIONS_TYPES = {
  SEND_COMMENT: "@postCommentReducer/SEND_COMMENT",
  SEND_COMMENT_SUCCESS: "@postCommentReducer/SEND_COMMENT_SUCCESS",
  SEND_COMMENT_ERROR: "@postCommentReducer/SEND_COMMENT_ERROR",
};

const INITIAL_STATE: PostCommentState = {
  status: "idle",
};

export default function postCommentReducer(
  state = INITIAL_STATE,
  action
): PostCommentState {
  switch (action.type) {
    case POST_COMMENT_ACTIONS_TYPES.SEND_COMMENT: {
      return {
        ...state,
        status: action.payload.status,
      };
    }
    case POST_COMMENT_ACTIONS_TYPES.SEND_COMMENT_SUCCESS: {
      return {
        ...state,
        status: action.payload.status,
      };
    }
    case POST_COMMENT_ACTIONS_TYPES.SEND_COMMENT_ERROR: {
      return {
        ...state,
        status: action.payload.status,
      };
    }
    default:
      return state;
  }
}

export function sendPostCommentAPI(post: Post, comment: string) {
  return async (dispatch, getState) => {
    try {
      dispatch(sendComment());

      const state: RootState = getState();
      const newComment = creatComment(comment, state.Login.user);

      const newPost = { ...post };
      newPost.post.comments.push(newComment);

      const newPostResponse = await postCommentAPI.sendComment(newPost);

      dispatch(sendCommentSuccess(newPostResponse));
    } catch (error) {
      const getGithubUserErrorAction = sendCommentError();
      dispatch(getGithubUserErrorAction);
    }
  };
}

function sendComment() {
  return {
    type: POST_COMMENT_ACTIONS_TYPES.SEND_COMMENT,
    payload: {
      status: "loading",
    },
  };
}

function sendCommentSuccess(post: Post) {
  return {
    type: POST_COMMENT_ACTIONS_TYPES.SEND_COMMENT_SUCCESS,
    payload: {
      status: "success",
      post: post,
    },
  };
}

function sendCommentError() {
  return {
    type: POST_COMMENT_ACTIONS_TYPES.SEND_COMMENT_ERROR,
    payload: {
      status: "error",
    },
  };
}
