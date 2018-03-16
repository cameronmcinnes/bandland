export const fetchUser = (id) => (
  $.ajax({
    url: `api/users/${id}`
  })
);

export const updateUser = (userId, data) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/users/${userId}`,
    data,
    processData: false,
    contentType: false,
    dataType: 'json',
  });
};

export const searchUsers = (query) => (
  $.ajax({
    url: 'api/users',
    data: { query }
  })
);

export const fetchAlbumsByTag = (tag) => (
  $.ajax({
    url: 'api/users',
    data: { tag }
  })
);
