class Api::AlbumsController < ApplicationController
  def create
  end

  def show
    @album = Album.includes(:artist, :collectors).find_by(id: params[:id])
  end
end
