import { LoadingActionTypes } from './loading.types';

export const changeCurrentLoadingStatus = (loading) => ({
  type: LoadingActionTypes.CHANGE_CURRENT_LOADING_STATUS,
  payload: loading,
});
