json.key_format! camelize: :lower


  @users.each do |user|
    json.set! user.id do
      json.extract! user, :username, :id
      json.thumbnail_profile_img_url asset_path(user.profile_img.url(:thumb))
    end
  end
