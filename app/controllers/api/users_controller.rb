class Api::UsersController < ApplicationController
	skip_before_action :authenticate_user, only: %i[create]
	before_action :set_user, only: %i[update destroy]

	def index
		render json: User.all,
		       each_serializer: UserWithoutDetailsSerializer,
		       status: :ok
	end

	def show
		if current_user
			render json: current_user, status: :ok
		else
			render json: 'Not authenticated', status: :unauthorized
		end
	end

	def create
		user = User.create!(user_params)
		if user.valid?
			session[:user_id] = user.id
			render json: user, status: :created
		else
			render json: user.errors.full_messages, status: :unprocessable_entity
		end
	end

	def update
		render json: @user.update!(user_params), status: :ok
	end

	def destroy
		@user.destroy
		render json: {}, status: :ok
	end

	private

	def set_user
		@user = User.find(params[:id])
	end

	def user_params
		params.permit(:username, :email, :password, :admin)
	end
end
