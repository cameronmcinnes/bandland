json.key_format! camelize: :lower


@users.each do |user|
  json.set! user.id do
    json.extract! user, :username, :id, :description, :location
    json.profile_img_url asset_path(user.profile_img.url)
  end
end
