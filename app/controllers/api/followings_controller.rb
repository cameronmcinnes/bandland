class Api::FollowingsController < ApplicationController
  def create
    @following = Following.create(following_params)

    if @following.save
      render :show
    else
      render json: @following.errors.messages, status: 422
    end
  end

  def destroy
    @following = current_user.followings_in.find_by(
      followee_id: params[:id]
    )
    @following.destroy
    render :show
  end

  def index
  end

  private
  def following_params
    params.require(:following).permit(:followee_id, :follower_id)
  end
end
