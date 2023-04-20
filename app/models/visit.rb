class Visit < ApplicationRecord
    belongs_to :user
    belongs_to :trail

    validates :date, presence: true
    validates :condition, presence: true
    validates :summary, presence: true, length: {maximum: 500}

end
