export const fetchUser = (id) => (
  $.ajax({
    url: `api/users/${id}`
  })
);
