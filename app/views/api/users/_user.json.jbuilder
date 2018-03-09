json.key_format! camelize: :lower

json.extract! user,
  :id,
  :username,
  :email,
  :location,
  :description,
  :own_site_url
json.profile_img_url asset_path(user.profile_img.url)
json.banner_img_url asset_path(user.banner_img.url)
json.collected_album_ids user.collected_albums.pluck(:id)
json.own_album_ids user.albums.pluck(:id)
