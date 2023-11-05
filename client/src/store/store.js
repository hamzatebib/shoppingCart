//compose to add optional fonctionalities
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import reducer from "./reducer/reducer";
import reduxThunk from "redux-thunk";
const initState = {};
//to active redux extention
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initState,
  enhancer(applyMiddleware(reduxThunk))
);
export default store;
// create satatic file
// create action creator dispatch(action)
//create reducer
//handle view
