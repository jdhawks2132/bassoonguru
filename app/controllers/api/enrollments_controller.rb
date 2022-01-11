class Api::EnrollmentsController < ApplicationController
  skip_before_action :authenticate_user
	before_action :set_enrollment, only: %i[show delete]

	def index
		render json: Enrollment.all, status: :ok
	end

	def show
		render json: @enrollment, status: :ok
	end

	def create
		enrollment = Enrollment.create!(enrollment_params)
		render json: enrollment, status: :created
	end

	def destroy
		@enrollment.destroy
		render json: {}, status: :ok
	end

	private

	def enrollment_params
		params.permit(:course_id, :user_id)
	end

	def set_enrollment
		@enrollment = Enrollment.find(params[:id])
	end
end
