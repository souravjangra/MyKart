class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.string :order_id
      t.integer :user_id
      t.float :amount

      t.timestamps
    end
  end
end
