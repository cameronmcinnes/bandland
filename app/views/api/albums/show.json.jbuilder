json.key_format! camelize: :lower

json.album do
  json.partial! 'api/albums/album', album: @album
end

json.users do
  json.set! @album.artist_id do
    json.partial! 'api/users/user', user: @album.artist
  end
  @album.collectors.each do |user|
    json.set! user.id do
      json.id user.id
      json.username user.username
      json.thumbnail_profile_img_url asset_path(user.profile_img.url(:thumb))
    end
  end
end

json.tracks do
  @album.tracks.sort_by { |track| track.ord }.each do |track|
    json.set! track.id do
      json.extract! track, :id, :title, :ord
      json.audio_file_url asset_path(track.audio_file.url)
    end
  end
end
