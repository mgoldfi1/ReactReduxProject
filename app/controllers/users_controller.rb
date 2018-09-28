class UsersController < ApplicationController


def show
  user = User.create(username: "matt")
 render json: user
end




end
