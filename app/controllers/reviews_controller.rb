class ReviewsController < ApplicationController



  def create
    review = Review.create(review_params)
    render json: review
  end





  private

  def review_params
    params.require(:review).permit(:content, :movie_id, :user_id)
  end


end
