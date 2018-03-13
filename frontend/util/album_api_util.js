export const fetchAlbum = id => (
  $.ajax({
    url: `api/albums/${id}`
  })
);

export const searchAlbums = (query) => (
  $.ajax({
    url: 'api/albums',
    data: { query }
  })
);

export const createAlbum = (data, userId) => (
  $.ajax({
    method: 'POST',
    url: `api/users/${userId}/albums`,
    data
  })
);
