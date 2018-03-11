json.key_format! camelize: :lower

json.extract! album,
  :id,
  :title,
  :price,
  :description,
  :genre,
  :artist_id
json.cover_img_url asset_path(album.cover_img.url)
# json.artist_name album.artist.username
json.release_date album.created_at.to_date.to_formatted_s(:long)
