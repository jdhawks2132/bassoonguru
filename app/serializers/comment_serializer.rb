class CommentSerializer < ActiveModel::Serializer
	attributes :id, :comment, :user_id, :course_id

	has_many :responses
end
