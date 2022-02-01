class Api::CoursesController < ApplicationController
	skip_before_action :authenticate_user, only: %i[index]
	before_action :set_course, only: %i[show destroy]

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

	def create
		course = Course.create!(course_params)
		render json: course, status: :created
	end

	def destroy
		@course.destroy
		render json: {}, status: :ok
	end

	private

	def set_course
		@course = Course.find(params[:id])
	end

	def course_params
		params.permit(:name, :desc, :details)
	end
end
