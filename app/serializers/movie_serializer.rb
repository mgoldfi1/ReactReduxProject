class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :year
  has_many :reviews 
end
