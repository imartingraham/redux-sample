import { createStore, applyMiddleware } from 'redux';
import repos from './reducers/repos'
import thunk from 'redux-thunk'

let createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const store = createStoreWithMiddleware(repos);

export default store