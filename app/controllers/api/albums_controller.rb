class Api::AlbumsController < ApplicationController
  def create
  end

  def show
    @album = Album.includes(:collectors, :tracks, artist: {albums: :artist}).find_by(id: params[:id])
  end
end
