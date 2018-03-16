class Api::CollectingsController < ApplicationController
  def create
    @collecting = Collecting.create(collecting_params)

    if @collecting.save
      render :show
    else
      render json: @collecting.errors.messages, status: 422
    end
  end

  def destroy
    @collecting = current_user.collectings.find_by(
      collected_id: params[:id],
      collector_id: current_user.id
    )
    @collecting.destroy
    render :show
  end

  private
  def collecting_params
    params.require(:collecting).permit(:collector_id, :collected_id)
  end
end
