class CreateOrderItems < ActiveRecord::Migration[6.0]
  def change
    create_table :order_items do |t|
      t.string :user_id
      t.integer :product_id
      t.integer :product_quantity
      t.float :product_price

      t.timestamps
    end
  end
end
