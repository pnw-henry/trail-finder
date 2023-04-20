class VisitsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    def index
        visits = Visit.all
        render json: visits
    end

    def show
        visit = find_visit
        render json: visit
    end

    def create
        user = User.find_by(id: session[:user_id])
        if user.valid?
            visit = user.visits.create!(visit_params)
            render json: visit, status: :created
        else
            render json: {error: "Invalid user"}, status: :unauthorized
        end
    end

    def destroy
        visit = find_visit
        visit.destroy
        head :no_content

    end

    private

    def find_visit
        Visit.find(params[:id])
    end

    def visit_params
        params.permit(:date, :condition, :summary)
    end

    def render_unprocessable_entity_response(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end

    def record_not_found
        render json: { error: "You haven't visited this trail!" }, status: :not_found
    end
end
