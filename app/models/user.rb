class User < ApplicationRecord
    has_many :visits
    has_many :trails, through: :visits

    EXPERIENCE = ["Beginner", "Intermediate", "Expert"]

    has_secure_password

    validates :username, presence: true, uniqueness: true, length: { in: 3..15 }
    validates :name, presence: true, length: {maximum: 50}
    validates :experience, inclusion: {in: EXPERIENCE,
    message: "must be one of: #{EXPERIENCE.join(', ')}" }
end
