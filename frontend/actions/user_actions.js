import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const START_LOADING_USER = 'START_LOADING_USER';
export const START_UPDATING_USER = 'START_UPDATING_USER';

export const fetchUser = (id) => dispatch => {
  dispatch(startLoadingUser());
  return UserAPIUtil.fetchUser(id).then(
    (payload) =>  dispatch(receiveUser(payload))
)};

export const updateUser = (id, data) => dispatch => {
  dispatch(startUpdatingUser);
  return UserAPIUtil.updateUser(id, data).then(
    (user) => dispatch(receiveUser(user))
  );
};

export const receiveUser = ({user, collectedAlbums}) => ({
  type: RECEIVE_USER,
  user,
  collectedAlbums
});

export const startLoadingUser = () => ({
  type: START_LOADING_USER
});


export const startUpdatingUser = () => ({
  type: START_UPDATING_USER
});
