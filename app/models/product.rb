class Product < ApplicationRecord
    validates :sku, :presence => true, :length => {:minimum => 4, :maximum => 16}
    validates :name, :presence => true, :length => {:minimum => 3}
    validates :description, :presence => true, :length => {:minimum => 8}
    validates :price, :presence => true
    validates :quantity, :presence => true

end


