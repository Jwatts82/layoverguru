class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :name, :description
  belongs_to :airport
end
