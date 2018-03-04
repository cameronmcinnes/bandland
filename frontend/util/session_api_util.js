export const signup = data => (
  $.ajax({
    method: 'POST',
    url: 'api/users',
    data
  })
)

export const login = data => (
  $.ajax({
    method: 'POST',
    url: 'api/session',
    data
  })
)

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: 'api/session'
  })
)
