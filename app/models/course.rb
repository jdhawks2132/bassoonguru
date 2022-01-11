class Course < ApplicationRecord
	has_many :videos
	has_many :enrollments
	has_many :users, through: :enrollments
	has_many :comments

	validates :name, :desc, :details, presence: true
end
