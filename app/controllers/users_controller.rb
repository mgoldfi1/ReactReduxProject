
class UsersController < ApplicationController


def show
 @user = User.find_by(username: params[:user][:username])
 if @user && @user.authenticate(params[:user][:password])
   render json: @user
 else
   render json: {message: "Invalid Username Or Password"}
 end
end


  private

  def user_params
    params.require(:user).permit(:username,:password)
  end

end
