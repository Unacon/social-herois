import { Post, PostState } from "./interfaceHeroes";
import postsAPI from "./api";

import { POST_COMMENT_ACTIONS_TYPES } from "../postCommentReducer/index";
import { replacePost } from "./helpers";

const LOGIN_ACTIONS_TYPES = {
  GET_POSTS: "@PostReducer/GET_POSTS",
  GET_POSTS_SUCCESS: "@PostReducer/GET_POSTS_SUCCESS",
  GET_POSTS_ERROR: "@PostReducer/GET_POSTS_ERROR",
};

const INITIAL_STATE: PostState = {
  status: "idle",
  posts: [],
};

export default function PostReducer(state = INITIAL_STATE, action): PostState {
  switch (action.type) {
    case LOGIN_ACTIONS_TYPES.GET_POSTS: {
      return {
        ...state,
        status: action.payload.status,
        posts: action.payload.posts,
      };
    }
    case LOGIN_ACTIONS_TYPES.GET_POSTS_SUCCESS: {
      return {
        ...state,
        status: action.payload.status,
        posts: action.payload.posts,
      };
    }
    case LOGIN_ACTIONS_TYPES.GET_POSTS_ERROR: {
      return {
        ...state,
        status: action.payload.status,
        posts: action.payload.posts,
      };
    }
    case POST_COMMENT_ACTIONS_TYPES.SEND_COMMENT_SUCCESS: {
      console.log(action, state);
      const newPosts = replacePost(state, action);
      return {
        ...state,
        posts: newPosts,
      };
    }
    default:
      return state;
  }
}

export function getPostApi() {
  return async (dispatch) => {
    try {
      dispatch(getPosts());

      const posts = await postsAPI.getPosts();
      console.log(posts);
      dispatch(getPostsSuccess(posts));
    } catch (error) {
      const getGithubUserErrorAction = getPostsError();
      dispatch(getGithubUserErrorAction);
    }
  };
}

function getPosts() {
  return {
    type: LOGIN_ACTIONS_TYPES.GET_POSTS,
    payload: {
      status: "loading",
      posts: [],
    },
  };
}

function getPostsSuccess(post: Post[]) {
  return {
    type: LOGIN_ACTIONS_TYPES.GET_POSTS_SUCCESS,
    payload: {
      status: "success",
      posts: post,
    },
  };
}

function getPostsError() {
  return {
    type: LOGIN_ACTIONS_TYPES.GET_POSTS_ERROR,
    payload: {
      status: "error",
      posts: [],
    },
  };
}
