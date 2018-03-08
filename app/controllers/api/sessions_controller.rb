class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by(username: session_params[:username]) ||
      User.find_by(email: session_params[:username])

    if @user && @user.is_password?(session_params[:password])
      login(@user)
      render :show
    elsif @user
      render json: { password: ['Password incorrect, please try again'] }, status: 401
    else
      render json: { username: ['User not found, please try again'] }, status: 401
    end
  end

  def destroy
    if current_user
      logout
      render json: {}
    else
      render json: { username: ['No user logged in'] }, status: 404
    end
  end

  private
  def session_params
    params.require(:user).permit(:username, :password)
  end
end
