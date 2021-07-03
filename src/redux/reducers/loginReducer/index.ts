import { User, LoginState } from "./interfaceHeroes";
import loginAPI from "./api";
import { parseUser } from "./helpers";

const LOGIN_ACTIONS_TYPES = {
  GET_GITHUB_USER: "@LoginReducer/GET_GITHUB_USER",
  GET_GITHUB_USER_SUCCESS: "@LoginReducer/GET_GITHUB_USER_SUCCESS",
  GET_GITHUB_USER_ERROR: "@LoginReducer/GET_GITHUB_USER_ERROR",
  CLEAR_GITHUB_USER: "@LoginReducer/CLEAR__GITHUB_USER",
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
    case LOGIN_ACTIONS_TYPES.CLEAR_GITHUB_USER: {
      return {
        ...state,
        status: "idle",
        user: null,
        error: null,
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

      const githubUser = await loginAPI.getGithubUser(username);
      if (githubUser.login) {
        const user: User = parseUser(githubUser);
        console.log({ user });
        const getGithubUserSuccessAction = getGithubUserSuccess(user);
        dispatch(getGithubUserSuccessAction);
      } else {
        throw new Error(githubUser.message);
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

export function getGithubUserClear() {
  return {
    type: LOGIN_ACTIONS_TYPES.CLEAR_GITHUB_USER,
  };
}
