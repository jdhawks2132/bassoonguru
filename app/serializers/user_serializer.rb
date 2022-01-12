class UserSerializer < ActiveModel::Serializer
	attributes :id, :email, :username, :admin

	has_many :courses
	has_many :enrollments
end
