export const fetchAlbum = id => (
  $.ajax({
    url: `api/albums/${id}`
  })
);

export const searchAlbums = (query) => (
  $.ajax({
    url: 'albums/index',
    data: { query }
  })
);
