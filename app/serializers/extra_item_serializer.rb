class ExtraItemSerializer < ActiveModel::Serializer
  attributes :id, :detail
  has_one :extra
end
