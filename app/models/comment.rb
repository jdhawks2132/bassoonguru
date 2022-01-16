class Comment < ApplicationRecord
	belongs_to :user
	belongs_to :course
	has_many :responses, dependent: :destroy

	validates :comment, presence: true
end
