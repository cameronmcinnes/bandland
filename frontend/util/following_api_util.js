export const createFollowing = (following) => (
  $.ajax({
    method: 'POST',
    url: `api/followings`,
    data: { following }
  })
);

export const destroyFollowing = (followingId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/followings/${followingId}`
  })
);
