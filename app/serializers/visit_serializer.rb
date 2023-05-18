class VisitSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :date, :condition, :summary

  belongs_to :trail, serializer: VisitTrailSerializer
  belongs_to :user, serializer: VisitUserSerializer
end
