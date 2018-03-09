json.key_format! camelize: :lower

json.user do
  json.set! @user.id do
    json.partial! 'api/users/user', user: @user
  end
end

json.collected_albums do
  @user.collected_albums.each do |album|
    json.set! album.id do
      json.partial! 'api/albums/album', album: album
    end
  end
end
