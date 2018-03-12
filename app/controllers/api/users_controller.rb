class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/sessions/show'
    else
      render json: @user.errors.messages, status: 422
    end
  end

  def show
    # is this right
    @user = User.includes(albums: {artist: :albums}, collected_albums: {artist: :collected_albums}).find_by(id: params[:id])
  end

  def index
    if params[:query].present?
      @users = User.where('username ~ ?', params[:query])
    else
      @users = User.none
    end
  end

  def update
    unless params[:id].to_i == current_user.id
      render json: ['access denied'], status: 401
      return nil
    end

    @user = User.find_by(id: params[:id])

    if @user.update(user_params)
      render :show
    else
      render json: ['update failed'], status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username,
      :password,
      :email,
      :location,
      :description,
      :own_site_url,
      :profile_img,
      :banner_img
    )
  end
end
