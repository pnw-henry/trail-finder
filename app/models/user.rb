class User < ApplicationRecord
    has_many :visits
    has_many :trails, through: :visits

    has_secure_password

    validates :username, presence: true, uniqueness: true, length: { in: 3..15 }
    validates :password, length: { in: 6..30 }
    validates :name, presence: true, length: {maximum: 50}
    validates :experience, length: { maximum: 15 }
end
