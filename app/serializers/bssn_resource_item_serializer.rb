class BssnResourceItemSerializer < ActiveModel::Serializer
  attributes :id, :detail
  has_one :BassoonResource
end
