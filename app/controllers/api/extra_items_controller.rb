class Api::ExtraItemsController < ApplicationController
	def index
		render json: ExtraItems.all, status: :ok
	end
end
