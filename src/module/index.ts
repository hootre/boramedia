import { combineReducers } from 'redux';
import counter from './counter';
import title from './title';

const rootReducer = combineReducers({
  counter,
  title,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
