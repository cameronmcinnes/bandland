json.key_format! camelize: :lower

json.user do
  json.partial! 'api/users/user', user: @user
  json.collected_album_ids @user.collected_albums.pluck(:id)
  json.own_album_ids @user.albums.pluck(:id)
end

json.albums do
  @user.collected_albums.each do |album|
    json.set! album.id do
      json.partial! 'api/albums/album', album: album
      json.artist_name album.artist.username
    end
  end
  @user.albums.each do |album|
    json.set! album.id do
      json.partial! 'api/albums/album', album: album
      json.artist_name album.artist.username
    end
  end
end
