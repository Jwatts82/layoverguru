class AirportSerializer < ActiveModel::Serializer
  attributes :id, :name, :code, :visited
end
