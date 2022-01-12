class ResponseSerializer < ActiveModel::Serializer
	attributes :id, :response, :user_id, :course_id

	belongs_to :comment
	belongs_to :user
end
