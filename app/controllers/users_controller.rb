class UsersController < ApplicationController
     skip_before_action :authorize, only: :create

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        puts "showing"
        current_user = @current_user
        render json: current_user, status: :ok
    end

    private

    def user_params 
        params.permit(:username, :password, :password_confirmation)
    end
end
