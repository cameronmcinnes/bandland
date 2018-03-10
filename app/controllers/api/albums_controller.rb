class Api::AlbumsController < ApplicationController
  def create
  end

  def show
    @album = Album.find_by(id: params[:id])
    # debugger
  end
end
