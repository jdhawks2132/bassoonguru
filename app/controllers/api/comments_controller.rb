class Api::CommentsController < ApplicationController
	skip_before_action :authenticate_user
	before_action :set_comment, only: %i[show update destroy]

	def index
		render json: Comment.all, status: :ok, includes: :repsonses
	end

	def show
		render json: @comment, status: :ok, includes: :responses
	end

	def create
		comment = Comment.create!(comment_params)
		render json: comment, status: :created
	end

	def update
		render json: @comment.update!(comment_params), status: :ok
	end

	def destroy
		@comment.destroy
		render json: {}, status: :ok
	end

	private

	def set_comment
		@comment = Comment.find(params[:id])
	end

	def comment_params
		params.permit(:course_id, :user_id, :comment)
	end
end
