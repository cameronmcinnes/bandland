class Api::AlbumsController < ApplicationController
  def create
    @album = current_user.albums.new(album_params)
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
      render :search
    else
      lim = params[:limit].to_i
      @albums = Album.includes(:artist).limit(lim).order(created_at: :desc)
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
