class User < ApplicationRecord
  has_many :reviews
  has_many :movies, through: :reviews 
  has_secure_password
  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates(:password, { :length => { :in => 6..20 } })
  validates_confirmation_of :password
end
