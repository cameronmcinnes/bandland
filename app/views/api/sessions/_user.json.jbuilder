json.key_format! camelize: :lower

json.extract! user, :id, :email, :username
json.thumbnail_profile_img_url asset_path(user.profile_img.url(:thumb))
