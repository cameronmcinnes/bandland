json.key_format! camelize: :lower


@albums.each do |album|
  json.set! album.id do
    json.partial! 'api/albums/album', album: album
    json.artist_name album.artist.username
  end
end
