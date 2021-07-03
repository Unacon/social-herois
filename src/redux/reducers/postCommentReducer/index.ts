import { PostCommentState } from "./interfaceHeroes";
import postCommentAPI from "./api";
import { Post } from "../postReducer/interfaceHeroes";
import { RootState } from "../../configureStore";

const POST_COMMENT_ACTIONS_TYPES = {
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

      const id = Math.floor(Math.random() * 999).toString();
      const state: RootState = getState();
      const { image, name } = state.Login.user;
      const newComment = {
        id: id,
        image: image,
        name: name,
        comment: comment,
      };

      console.log({ newComment });

      //const newPost = await postCommentAPI.sendComment(post);
      dispatch(sendCommentSuccess());
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

function sendCommentSuccess() {
  return {
    type: POST_COMMENT_ACTIONS_TYPES.SEND_COMMENT_SUCCESS,
    payload: {
      status: "success",
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
