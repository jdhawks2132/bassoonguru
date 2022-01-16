class Api::CoursesController < ApplicationController
	before_action :set_course, only: %i[show]

	def index
		render json: Course.all, status: :ok
	end

	def show
		render json: @course,
		       include: %w[
				videos
				comments
				comments.responses
				comments.user.username
		       ],
		       serializer: CourseWithDetailsSerializer,
		       status: :ok
	end

	private

	def set_course
		@course = Course.find(params[:id])
	end
end
