import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer"
import { persistStore } from 'redux-persist';
import persistConfig from './persistConfig';

const store = configureStore({
    reducer: rootReducer,
  });
  
  const persistor = persistStore(store);
  
  export { store, persistor };