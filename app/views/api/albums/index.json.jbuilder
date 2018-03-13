json.key_format! camelize: :lower


@albums.each do |album|
  json.set! album.id do
    json.extract! album, :title, :id
    json.artist album.artist.username
    json.thumbnail_cover_url asset_path(album.cover_img.url(:thumb))
  end
end
