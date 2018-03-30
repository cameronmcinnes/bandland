import * as FollowingAPIUtil from '../util/following_api_util';

export const RECEIVE_FOLLOWING = 'RECEIVE_FOLLOWING';
export const DESTROY_FOLLOWING = 'DESTROY_FOLLOWING';

export const createFollowing = (data) => dispatch => (
  FollowingAPIUtil.createFollowing(data).then(
    (following) => dispatch(receiveFollowing(following))
  )
);

export const receiveFollowing = (following) => ({
  type: RECEIVE_FOLLOWING,
  following
});

export const destroyFollowing = collectedId => dispatch => (
  FollowingAPIUtil.destroyFollowing(collectedId).then(
    (following) => dispatch(receiveDestroyedFollowing(following))
  )
);

export const receiveDestroyedFollowing = following => ({
  type: DESTROY_FOLLOWING,
  following
});
