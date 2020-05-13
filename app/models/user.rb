class User < ApplicationRecord
    has_secure_password

    validates :email, :presence => true
    validates :first_name, :presence => true
    validates :last_name, :presence => true
    validates :password, :presence => true

end
