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
    @user = User.find_by(id: params[:id])
  end

  def update
    @user = User.find_by(id: params[:id])

    if @user.update(user_params)
      render :show
    else
      render status: 422
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
