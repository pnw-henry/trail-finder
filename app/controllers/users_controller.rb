class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    before_action :authorize, only: {:show}

    def create
        user = User.create!(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {error: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

     def show
        user = User.find_by(id: session[:user_id])
        render json: user
    end

    private

    def authorize
        return render json: {error: "Invalid username or password"}, status: :unauthorized unless session.include? :user_id
    end
    
    def render_not_found_response
        render json: {error: "User not found"}, status: :not_found
    end

    def user_params
        params.permit(:name, :experience, :username, :password, :password_confirmation )
    end
end
