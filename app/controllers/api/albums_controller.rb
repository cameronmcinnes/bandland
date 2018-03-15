class Api::AlbumsController < ApplicationController
  def create
    @album = Album.new(album_params)
    @album.artist_id = current_user.id
    if @album.save
      @album.tag_names = tag_params[:tag_names]
      render partial: 'album', locals: { album: @album }
    else
      render json: @album.errors.messages, status: 422
    end
  end

  def index
    if params[:query].present?
      @albums = Album.includes(:artist).where('title ~ ?', params[:query])
    else
      # may use action for discover
      @albums = Album.none
    end
  end

  def show
    @album = Album.includes(:tags, :collectors, :tracks, artist: {albums: :artist}).find_by(id: params[:id])
  end

  private
  def album_params
    params.require(:album).permit(
      :title,
      :description,
      :price,
      :genre,
      :cover_img,
      tracks_attributes: [
        :title,
        :audio_file,
        :ord
      ]
    )
  end

  def tag_params
    params.require(:tags).permit(tag_names: [])
  end
end
