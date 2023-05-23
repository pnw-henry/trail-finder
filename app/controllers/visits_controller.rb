class VisitsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    before_action :authorize, only: [:create, :update, :destroy]

    def index
        if params[:trail_id]
            trail = Trail.find(params[:trail_id])
            visits = trail.visits
        else
            visits = Visit.all
        end
        render json: visits, include: [:trail, :user]
    end

    def show
        visit = find_visit
        render json: visit, include: [:trail, :user]
    end

    def create
        user = find_user
        visit = user.visits.create!(visit_params)
        render json: visit, status: :created
    end

    def update
        user = find_user
        visit = user.visits.find(params[:id])
        if (user.id != visit.user_id)
            return render json: {error: "You are not authorized to edit this visit"}, status: :unauthorized
        else
            visit.update!(visit_params)
            render json: visit, status: :ok
        end
    end

    def destroy
        user = find_user
        visit = user.visits.find(params[:id])
        if (user.id != visit.user_id)
            return render json: {error: "You are not authorized to delete this visit"}, status: :unauthorized
        else
            visit.destroy
            head :no_content
            render json: {}
        end

    end

    private

    def find_user
        User.find(session[:user_id])
    end

    def find_visit
        Visit.find(params[:id])
    end

    def visit_params
        params.permit(:date, :condition, :summary, :trail_id, :user_id)
    end

    def authorize
        return render json: {error: "Please login first"}, status: :unauthorized unless session.include? :user_id
    end

    def render_unprocessable_entity_response(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end

    def render_not_found_response
        render json: { error: "This visit wasn't found" }, status: :not_found
    end
end
