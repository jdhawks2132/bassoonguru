class Api::CoursesController < ApplicationController
	before_action :set_course, only: [:show]

	def index
		render json: Course.all, status: :ok
	end

	def show
		render json: @camper, status: :ok
	end

	private

	def set_course
		@course = Course.find(params[:id])
	end
end
