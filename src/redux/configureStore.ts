import * as Redux from "redux";
import * as ReduxDevtoolsExtension from "redux-devtools-extension";
import * as ReactRedux from "react-redux";
import ReduxThunk from "redux-thunk";

import loginReducer from "./reducers/loginReducer";
import postReducer from "./reducers/postReducer";

const reducers = {
  Login: loginReducer,
  Post: postReducer,
};

const rootReducer = Redux.combineReducers(reducers);
const middlewares = Redux.applyMiddleware(ReduxThunk);
const enchancers = ReduxDevtoolsExtension.composeWithDevTools(middlewares);
const store = Redux.createStore(rootReducer, enchancers);

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelect: ReactRedux.TypedUseSelectorHook<RootState> =
  ReactRedux.useSelector;
export const useAppDispatch = () => ReactRedux.useDispatch();

export default store;
