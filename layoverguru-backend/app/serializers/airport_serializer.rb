class AirportSerializer < ActiveModel::Serializer
  attributes :id, :name, :code, :visited
  has_many :activities
end
