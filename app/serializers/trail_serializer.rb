class TrailSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :difficulty, :length, :elevation_gain, :highest_point

  has_many :visits
end
