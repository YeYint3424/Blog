import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import userReducer from "./userSlice"
import tokenReducer from "./tokenSlice"
import persistConfig from "./persistConfig"
const rootReducer = combineReducers({
  user: userReducer,
  token: tokenReducer,
});

export default persistReducer(persistConfig, rootReducer);
