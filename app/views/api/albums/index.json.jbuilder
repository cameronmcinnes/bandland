json.key_format! camelize: :lower

json.albums do
  @albums.each do |album|
    json.set! album.id do
      json.partial! 'api/albums/album', album: album
      json.artist_name album.artist.username
    end
  end
end

json.recent_albums @albums.pluck(:id)
