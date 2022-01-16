class UserWithoutDetailsSerializer < ActiveModel::Serializer
	attributes :id, :username, :admin
end
