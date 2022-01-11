class Course < ApplicationRecord
	has_many :videos
	has_many :enrollments
	has_many :users, through: :enrollments

	validates :name, :desc, :details, presence: true
end
