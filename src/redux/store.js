import { applyMiddleware, createStore, combineReducers, compose } from 'redux';

import thunk from 'redux-thunk';
import wordsReducer from './reducers/words.reducer';
import rootReducer from './reducers/root.reducer';

const reducers = combineReducers({
  wordsReducer,
  rootReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers, 
  composeEnhancer(applyMiddleware(thunk))
);

export default store;