class UserWithoutDetailsSerializer < ActiveModel::Serializer
	attributes :id, :username, :email, :admin
end
