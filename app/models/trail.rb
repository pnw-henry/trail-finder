class Trail < ApplicationRecord
    has_many :visits, dependent: :destroy
    has_many :users, through: :visits

    validates :name, presence: true
    validates :location, presence: true
    validates :difficulty, presence: true
end
