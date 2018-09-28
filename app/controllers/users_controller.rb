
class UsersController < ApplicationController


def show
 @user = User.find_by(username: params[:username])
 if @user && @user.authenticate(params[:password])
   render json: @user
 else
   render json: {message: "login failed"}
 end
end


  private



end
