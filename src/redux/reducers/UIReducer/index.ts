import { UIState } from "./interface";

const UI_ACTIONS_TYPES = {
  IS_TYPING: "@UIReducer/WRITE_MESSAGE",
};

const INITIAL_STATE: UIState = {
  isTyping: false,
};

export default function UIReducer(state = INITIAL_STATE, action): UIState {
  switch (action.type) {
    case UI_ACTIONS_TYPES.IS_TYPING: {
      return {
        ...state,
        isTyping: action.payload.isTyping,
      };
    }
    default:
      return state;
  }
}

export function updateIsTyping(isTyping: boolean) {
  return {
    type: UI_ACTIONS_TYPES.IS_TYPING,
    payload: {
      isTyping: isTyping,
    },
  };
}
