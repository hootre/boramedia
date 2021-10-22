import { combineReducers } from 'redux';
import SlideReducer from './SlideReducer';

const rootReducer = combineReducers({
  SlideReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
