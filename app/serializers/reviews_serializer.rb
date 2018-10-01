class ReviewsSerializer < ActiveModel::Serializer
  attributes :id, :content, :movietitle, :movieyear
  belongs_to :user
  belongs_to :movie









end
