class EnrollmentSerializer < ActiveModel::Serializer
	attributes :id, :course_id, :user_id

	belongs_to :user
	belongs_to :course
end
