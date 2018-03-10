export const fetchAlbum = id => (
  $.ajax({
    url: `api/albums/${id}`
  })
);
