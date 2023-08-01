import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import todoReducer from './todoReducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
const rootReducer = combineReducers({
  counter: todoReducer,
});
export const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
