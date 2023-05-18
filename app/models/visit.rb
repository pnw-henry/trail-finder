class Visit < ApplicationRecord
    belongs_to :user
    belongs_to :trail

    CONDITIONS = ["clear", "overcast", "rain", "snow", "fog", "wind"]

    validates :date, presence: true
    validates :condition, presence: true, inclusion: {in: CONDITIONS,
    message: "Must be one of: #{CONDITIONS.join(', ')}" }
    validates :summary, presence: true, length: {maximum: 500}

end
