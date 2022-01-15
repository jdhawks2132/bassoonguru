class ExtraSerializer < ActiveModel::Serializer
	attributes :id, :name, :desc, :details

	has_many :extra_items
end
