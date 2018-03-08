json.key_format! camelize: :lower

json.set! user.id do
  json.extract! user,
    :id,
    :username,
    :email,
    :location,
    :description,
    :own_site_url
  json.profile_img_url asset_path(user.profile_img.url)
  json.banner_img_url asset_path(user.banner_img.url)
end
