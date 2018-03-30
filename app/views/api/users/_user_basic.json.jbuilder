json.key_format! camelize: :lower

json.extract! user, :username, :id, :description, :location
json.profile_img_url asset_path(user.profile_img.url)
