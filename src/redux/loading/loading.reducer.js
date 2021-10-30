import { LoadingActionTypes } from './loading.types';

const INITIAL_STATE = false;

const loadingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LoadingActionTypes.CHANGE_CURRENT_LOADING_STATUS:
      return action.payload;
    default:
      return state;
  }
};

export default loadingReducer;
