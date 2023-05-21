class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    before_action :authorize, only: [:show, :destroy]

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        user = User.find_by(id: session[:user_id])
        render json: user, include: :trails
    end

    def destroy
        user = User.find_by(id: session[:user_id])
        user.destroy
        render json: {}
    end

    # Practice

    def search
        query = params[:query]
        user = User.where(username: query)
        render json: user
    end

    def search_by_experience
        query = params[:query]
        users = User.all.select{|user| user.experience === query.to_s}
        render json: users
    end

    def find_users_with_visits
        users = User.all.select{|user| user.visits.length > 0}
        render json: users
    end

    private

    def render_unprocessable_entity_response(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end

    def authorize
        return render json: {error: "Please login first to view your profile"}, status: :unauthorized unless session.include? :user_id
    end
    
    def render_not_found_response
        render json: {error: "User not found"}, status: :not_found
    end

    def user_params
        params.permit(:name, :experience, :username, :password, :password_confirmation )
    end
end
