class Api::AlbumsController < ApplicationController
  def create
  end

  def show
    @album = Album.includes(:artist, :collectors, :tracks).find_by(id: params[:id])
  end
end
