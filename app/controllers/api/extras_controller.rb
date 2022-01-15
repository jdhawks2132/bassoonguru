class Api::ExtrasController < ApplicationController
	before_action :set_comment, only: :show

	def index
		render json: Extra.all, status: :ok
	end

	def show
		render json: @extra, status: :ok
	end

	private

	def set_extras
		@extra = Extra.find(params[:id])
	end
end
