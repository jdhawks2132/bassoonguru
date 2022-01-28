class Api::VideosController < ApplicationController
	before_action :set_video, only: %i[show]

	def index
		render json: Video.all, status: :ok
	end

	def show
		render json: @video, status: :ok
	end

	def create
		video = Video.create!(video_params)
		render json: video, status: :created
	end

	private

	def set_video
		@video = Video.find(params[:id])
	end

	def video_params
		params.permit(:title, :url, :course_id)
	end
end
