class TrailsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

    before_action :authorize, only: {:create}

    def index
        render json: Trail.all
    end

    def create
        user = User.find_by(id: session[:user_id])
        if user.valid?
            trail = user.trails.create!(trail_params)
            render json: trail, status: :created
        else
            render json: {error: "Please Login or create an account"}, status: :unauthorized
        end
    end

    def show
        trail = Trail.find_by(id: params[:id])
        render json: trail
    end

    private

    def authorize
        return render json: {error: "You must be logged in before adding a new trail."}, status: :unauthorized unless session.include? :user_id
    end

    def trail_params
        params.permit(:name, :location, :difficulty, :length, :elevation_gain, :highest_point)
    end

    def render_unprocessable_entity_response(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end

    def record_not_found
        render json: { error: "Trail information not found" }, status: :not_found
    end


end
