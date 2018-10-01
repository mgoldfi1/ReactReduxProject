class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email
  has_many :movies, through: :reviews
end
