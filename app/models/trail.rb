class Trail < ApplicationRecord
    has_many :visits, dependent: :destroy
    has_many :users, through: :visits

    DIFFICULTIES = ["Easy", "Moderate", "Hard"]

    validates :name, presence: true
    validates :location, presence: true
    validates :difficulty, presence: true, inclusion: {in: DIFFICULTIES,
    message: "Must be one of: #{DIFFICULTIES.join(', ')}"}
    validates :length, presence: true, numericality: {greater_than: 0}
    validates :elevation_gain, presence: true, numericality: {greater_than: 0}
    validates :highest_point, presence: true, numericality: {greater_than: 0}
end
