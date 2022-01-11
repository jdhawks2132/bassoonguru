class Api::UsersController < ApplicationController
	skip_before_action :authenticate_user, only: %i[create show]

	def show
		if current_user
			render json: current_user, status: :ok
		else
			render json: 'Not authenticated', status: :unauthorized
		end
	end

	def create
		user = User.create(user_params)
		if user.valid?
			session[:user_id] = user.id
			render json: user, status: :created
		else
			render json: user.errors.full_messages, status: :unprocessable_entity
		end
	end

	private

	def user_params
		params.permit(:username, :email, :password, :admin)
	end
end
