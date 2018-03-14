import * as CollectingAPIUtil from '../util/collecting_api_util';

export const RECEIVE_COLLECTING = 'RECEIVE_COLLECTING';
export const DESTROY_COLLECTING = 'DESTROY_COLLECTING';

export const createCollecting = (data) => dispatch => (
  CollectingAPIUtil.createCollecting(data).then(
    (collecting) => dispatch(receiveCollecting(collecting))
  )
);

export const receiveCollecting = (collecting) => ({
  type: RECEIVE_COLLECTING,
  collecting
});

export const destroyCollecting = collectedId => dispatch => (
  CollectingAPIUtil.destroyCollecting(collectedId).then(
    (collecting) => dispatch(receiveDestroyedcollecting(collecting))
  )
);

export const receiveDestroyedcollecting = collecting => ({
  type: DESTROY_COLLECTING,
  collecting
});
