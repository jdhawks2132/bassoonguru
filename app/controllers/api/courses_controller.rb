class Api::CoursesController < ApplicationController
	skip_before_action :authenticate_user
	before_action :set_course, only: [:show]

	def index
		render json: Course.all, status: :ok
	end

	def show
		render json: @course, serializer: CourseWithDetailsSerializer, status: :ok
	end

	private

	def set_course
		@course = Course.find(params[:id])
	end
end
