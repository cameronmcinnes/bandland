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
    data,
    processData: false,
    contentType: false,
    dataType: 'json',
  })
);

export const fetchRecentAlbums = ( limit ) => (
  $.ajax({
    url: 'api/albums',
    data: { limit }
  })
);

export const fetchAlbumsByTag = (tag) => (
  $.ajax({
    url: 'api/albums',
    data: { tag }
  })
);
