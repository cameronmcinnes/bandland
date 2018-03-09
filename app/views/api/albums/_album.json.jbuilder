json.key_format! camelize: :lower

json.extract! album,
  :id,
  :title,
  :price,
  :description,
  :genre
json.cover_img_url asset_path(album.cover_img.url)
