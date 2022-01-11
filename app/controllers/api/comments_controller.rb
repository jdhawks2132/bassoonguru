class Api::CommentsController < ApplicationController
	before_action :set_comment, only: %i[show update destroy]

	def index
		render json: Comment.all, status: :ok
	end

	def show
		render json: @comment, status: :ok
	end

	def create
		comment = Comment.create!(comment_params)
		render json: comment, status: :created
	end

	def destroy
		comment = Comment.find(params[:id])
		comment.destroy
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
