import {createStore, applyMiddleware} from 'redux';
import { rootReducer } from '../reducers/rootReducer';
import thunk from 'redux-thunk';

export var store = createStore(rootReducer, applyMiddleware(thunk));
