import React from "react";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import { reducer } from "redux-form";

const store = createStore(
  combineReducers({
    form: reducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default story => (
  <Provider store={store}>
    {story()}
  </Provider>
);
