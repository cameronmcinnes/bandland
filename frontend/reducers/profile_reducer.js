import { merge } from 'lodash';

import { RECEIVE_NEW_PROFILE_PICTURE } from '../actions/ui_actions';
import { RECEIVE_USER } from '../actions/user_actions';

const defaultState = {
  profileImgUrl: null,
  bannerImgUrl: null
};

const profileReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_USER:
      return merge({}, state, {
        profileImgUrl: action.user.profileImgUrl,
        bannerImgUrl: action.user.bannerImgUrl
      });
    case RECEIVE_NEW_PROFILE_PICTURE:
      return merge({}, state, {
        [`${action.picType}ImgUrl`]: action.picUrl
      });
    default:
      return state;
  }
};

export default profileReducer;
