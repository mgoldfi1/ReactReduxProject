
class UsersController < ApplicationController


def show
 @user = User.find_by(username: params[:user][:username])
 if @user && @user.authenticate(params[:user][:password])
   render json: @user
 else
   render json: {message: "Invalid Username Or Password"}, status: 406
 end
end

def create
  user = User.new(user_params)
    if user.save
      render json: user
    else
      render json: {message: user.errors}
  end
end


  private

  def user_params
    params.require(:user).permit(:username,:password, :email, :password_confirmation)
  end

end
