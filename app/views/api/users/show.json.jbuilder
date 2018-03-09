json.key_format! camelize: :lower

json.user do
  json.partial! 'api/users/user', user: @user
end

json.albums do
  @user.collected_albums.each do |album|
    json.set! album.id do
      json.partial! 'api/albums/album', album: album
    end
  end
  @user.albums.each do |album|
    json.set! album.id do
      json.partial! 'api/albums/album', album: album
    end
  end
end
