import { createStore, applyMiddleware, compose } from "redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "../Reducer/reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const reducers = combineReducers({
  cartReducer: cartReducer,
});

const persistConfig = {
  key: "course_cart",
  storage,
  timeout: null,
};
const persistedReducer = persistReducer(persistConfig, reducers);
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = configureStore(
  {
    reducer:   persistedReducer,
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const persistor = persistStore(store);

export default store;
export { persistor };
