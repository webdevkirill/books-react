import { combineReducers, createStore } from "redux";
import { tableReducer } from './reducers/tableReducer';

const rootReducer = combineReducers({tableReducer});

export const store = createStore(rootReducer);