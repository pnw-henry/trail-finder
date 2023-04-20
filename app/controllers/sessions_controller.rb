class SessionsController < ApplicationController
    def login
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {error: "Invalid username or password"}
        end
    end

    def logout
        if session[:user_id]
            session.delete :user_id
            head :no_content
        else
            render json: {error: "No user logged in"}, status: :unauthorized
        end
    end
end
