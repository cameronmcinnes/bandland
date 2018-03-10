json.key_format! camelize: :lower

json.album do
  json.partial! 'api/albums/album', album: @album
end

json.user do
  json.partial! 'api/users/user', user: @album.artist
end
