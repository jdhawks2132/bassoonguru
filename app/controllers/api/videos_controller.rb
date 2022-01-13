class Api::VideosController < ApplicationController
	before_action :set_video, only: %i[show]

	def index
		render json: Video.all, status: :ok
	end

	def show
		render json: @video, status: :ok
	end

	private

	def set_video
		@video = Video.find(params[:id])
	end
end
