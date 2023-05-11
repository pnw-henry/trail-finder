class Trail < ApplicationRecord
    has_many :visits, dependent: :destroy
    has_many :users, through: :visits

    DIFFICULTIES = ["Easy", "Moderate", "Hard"]

    validates :name, presence: true
    validates :location, presence: true
    validates :difficulty, presence: true, inclusion: {in: DIFFICULTIES,
    message: "Must be one of: #{DIFFICULTIES.join(', ')}"}
end
