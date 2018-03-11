json.key_format! camelize: :lower

json.albums do
  json.set! @album.id do
    json.partial! 'api/albums/album', album: @album
    json.collector_ids @album.collectors.pluck(:id)
    json.track_ids @album.tracks.pluck(:id)
  end
  # add other albums by artist
  @album.artist.albums.each do |album|
    next if album.id == @album.id
    json.set! album.id do
      json.title album.title
      json.release_date album.created_at.to_date.to_formatted_s(:long)
      json.cover_img_url asset_path(album.cover_img.url)
      json.id album.id
    end
  end
end

json.users do
  json.set! @album.artist_id do
    json.partial! 'api/users/user', user: @album.artist
    json.own_album_ids @album.artist.albums.pluck(:id)
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
