import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_SEARCHED_USERS = 'RECEIVE_SEARCHED_USERS';
export const START_LOADING_USER = 'START_LOADING_USER';
export const START_UPDATING_USER = 'START_UPDATING_USER';
export const RECEIVE_DISCOVERED_USERS = 'RECEIVE_DISCOVERED_USERS';

export const fetchUser = (id) => dispatch => {
  // dispatch(startLoadingUser());
  return UserAPIUtil.fetchUser(id).then(
    (payload) =>  dispatch(receiveUser(payload))
)};

export const updateUser = (id, data) => dispatch => {
  dispatch(startUpdatingUser);
  return UserAPIUtil.updateUser(id, data).then(
    (user) => dispatch(receiveUser(user))
  );
};

export const searchUsers = (query) => dispatch => (
  UserAPIUtil.searchUsers(query).then(
    (users) => dispatch(receiveSearchedUsers(users))
  )
);

export const receiveUser = ({user, albums, tags}) => ({
  type: RECEIVE_USER,
  user,
  albums,
  tags
});

export const receiveSearchedUsers = (users) => ({
  type: RECEIVE_SEARCHED_USERS,
  users
});

export const startLoadingUser = () => ({
  type: START_LOADING_USER
});


export const startUpdatingUser = () => ({
  type: START_UPDATING_USER
});

export const fetchUsersByTag = tag => dispatch => {
  return AlbumAPIUtil.fetchUsersByTag(tag).then(
    (users) => dispatch(receiveDiscoverResults(users))
  )
}

export const receiveDiscoverResults = (users) => ({
  type: RECEIVE_DISCOVERED_USERS,
  users
})
