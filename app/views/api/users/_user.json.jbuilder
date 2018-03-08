json.set! user.id do
  json.extract! user,
    :id,
    :username,
    :email,
    :location,
    :description,
    :own_site_url
  json.profile_img_url asset_path(user.profile_img.url)  
end
