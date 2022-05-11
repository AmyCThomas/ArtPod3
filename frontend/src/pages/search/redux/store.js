import { configureStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import artworksReducer from './artworksApi';

const reducers = combineReducers({
  artworksReducer,
});

const store = configureStore(
  reducers,
  applyMiddleware(logger, thunk),
);

export default store;
