json.key_format! camelize: :lower


@albums.each do |album|
  json.set! album.id do
    json.extract! album, :title, :id
    # json.thumbnail_profile_img_url asset_path(user.profile_img.url(:thumb))
  end
end
