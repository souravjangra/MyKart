class AddProductTitleToOrderItems < ActiveRecord::Migration[6.0]
  def change
    add_column :order_items, :product_title, :string
  end
end
