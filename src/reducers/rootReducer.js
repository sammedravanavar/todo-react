import {combineReducers} from 'redux';
import {users} from './users.reducer';
import {todos} from './todos.reducer';
import {userDetails} from './userDetails.reducer';

export var rootReducer = combineReducers({users, todos, userDetails}); 