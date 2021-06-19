import { User, LoginState } from "./interfaceHeroes";
import loginAPI from "./api";
import { error } from "console";

const LOGIN_ACTIONS_TYPES = {
  GET_GITHUB_USER: "@LoginReducer/GET_GITHUB_USER",
  GET_GITHUB_USER_SUCCESS: "@LoginReducer/GET_GITHUB_USER_SUCCESS",
  GET_GITHUB_USER_ERROR: "@LoginReducer/GET_GITHUB_USER_ERROR",
};

const INITIAL_STATE: LoginState = {
  status: "idle",
  user: null,
  error: null,
};

export default function LoginReducer(
  state = INITIAL_STATE,
  action
): LoginState {
  switch (action.type) {
    case LOGIN_ACTIONS_TYPES.GET_GITHUB_USER: {
      return {
        ...state,
        status: action.payload.status,
        user: action.payload.user,
        error: null,
      };
    }
    case LOGIN_ACTIONS_TYPES.GET_GITHUB_USER_SUCCESS: {
      return {
        ...state,
        status: action.payload.status,
        user: action.payload.user,
        error: null,
      };
    }
    case LOGIN_ACTIONS_TYPES.GET_GITHUB_USER_ERROR: {
      return {
        ...state,
        status: action.payload.status,
        user: action.payload.user,
        error: action.payload.error,
      };
    }
    default:
      return state;
  }
}

export function getGithubUserApi(username: string) {
  return async (dispatch) => {
    try {
      const getGithubUserAction = getGithubUser();
      dispatch(getGithubUserAction);

      const user = await loginAPI.getGithubUser(username);
      if (user.login) {
        const getGithubUserSuccessAction = getGithubUserSuccess(user);
        dispatch(getGithubUserSuccessAction);
      } else {
        throw new Error(user.message);
      }
    } catch (error) {
      console.log(error);
      const getGithubUserErrorAction = getGithubUserError(error.message);
      dispatch(getGithubUserErrorAction);
    }
  };
}

function getGithubUser() {
  return {
    type: LOGIN_ACTIONS_TYPES.GET_GITHUB_USER,
    payload: {
      status: "loading",
      user: null,
    },
  };
}

function getGithubUserSuccess(user: User) {
  return {
    type: LOGIN_ACTIONS_TYPES.GET_GITHUB_USER_SUCCESS,
    payload: {
      status: "success",
      user: user,
    },
  };
}

function getGithubUserError(erro: string) {
  return {
    type: LOGIN_ACTIONS_TYPES.GET_GITHUB_USER_ERROR,
    payload: {
      status: "error",
      user: null,
      error: erro,
    },
  };
}
