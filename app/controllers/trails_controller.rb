class TrailsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    before_action :authorize, only: :create

    def index
        trails = Trail.all
        render json: trails, include: [:users, :visits]
    end

    def create
        trail = Trail.create!(trail_params)
        render json: trail, status: :created
    end

    def show
        trail = find_trail
        render json: trail
    end

    private

    def find_trail
        Trail.find(params[:id])
    end

    def authorize
        return render json: {error: "You must be logged in before adding a new trail."}, status: :unauthorized unless session.include? :user_id
    end

    def trail_params
        params.permit(:name, :location, :difficulty, :length, :elevation_gain, :highest_point)
    end

    def render_unprocessable_entity_response(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end

    def render_not_found_response
        render json: { error: "Trail information not found" }, status: :not_found
    end


end
