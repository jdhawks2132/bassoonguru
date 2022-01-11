class Comment < ApplicationRecord
	belongs_to :user
	belongs_to :course
	has_many :response_to_comments
	has_many :responses, through: :response_to_comments

	validates :comment, presence: true
end
