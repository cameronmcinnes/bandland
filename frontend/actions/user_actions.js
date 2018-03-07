import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const START_LOADING_USER = 'START_LOADING_USER';

export const fetchUser = (id) => dispatch => {
  dispatch(startLoadingUser());
  return UserAPIUtil.fetchUser(id).then(
    (user) => dispatch(receiveUser(user)),
    // (errors) => dispatch(receiveUserErrors(errors))
  );
}

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const startLoadingUser = () => ({
  type: START_LOADING_USER
});
