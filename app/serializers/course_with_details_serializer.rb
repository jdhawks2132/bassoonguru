class CourseWithDetailsSerializer < ActiveModel::Serializer
  attributes :id, :name, :desc, :details

	has_many :comments
	has_many :videos
end
