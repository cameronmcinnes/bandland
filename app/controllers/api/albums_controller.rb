class Api::AlbumsController < ApplicationController
  def create
    @album = Album.new(album_params)

    if @album.save
      render :show
    else
      render json: @album.errors.messages, status: 422
    end
  end

  def index
    if params[:query].present?
      @albums = Album.where('title ~ ?', params[:query])
    else
      @albums = Album.none
    end
  end

  def show
    @album = Album.includes(:collectors, :tracks, artist: {albums: :artist}).find_by(id: params[:id])
  end

  private
  def album_params
    params.require(:album).permit(
      :title,
      :description,
      :price,
      :genre,
      :cover_img
    )
  end
end
