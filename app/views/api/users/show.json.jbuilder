json.key_format! camelize: :lower

json.user do
  json.partial! 'api/users/user', user: @user
  json.collected_album_ids @user.collected_albums.pluck(:id)
  json.own_album_ids @user.albums.pluck(:id)
  json.tag_ids @user.tags.pluck(:id)
  json.follower_ids @user.followers.pluck(:id)
  json.followed_user_ids @user.followed_users.pluck(:id)
end

json.users do
  @user.followers.each do |follower|
    json.set! follower.id do
      json.partial! 'api/users/user_basic', user: follower
    end
  end
  @user.followed_users.each do |following|
    json.set! following.id do
      json.partial! 'api/users/user_basic', user: following
    end
  end
end

json.albums do
  @user.collected_albums.each do |album|
    json.set! album.id do
      json.partial! 'api/albums/album', album: album
      json.artist_name album.artist.username
    end
  end
  @user.albums.each do |album|
    json.set! album.id do
      json.partial! 'api/albums/album', album: album
      json.artist_name album.artist.username
    end
  end
end

json.tags do
  @user.tags.each do |tag|
    json.set! tag.id do
      json.extract! tag, :name, :id
    end
  end
end
