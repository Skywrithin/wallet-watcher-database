class User < ApplicationRecord
    has_secure_password

    validates :username, length: {minimum: 3}, uniqueness: true
    validates :password, confirmation: true, length: {minimum: 8}
    validates :password_confirmation, presence: true

end
