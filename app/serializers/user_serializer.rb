class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :experience

  has_many :trails
end
