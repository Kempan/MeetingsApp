import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './Reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

const sagaMiddlewere = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddlewere)
)

sagaMiddlewere.run(rootSaga);