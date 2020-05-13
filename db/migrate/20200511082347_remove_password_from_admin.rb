class RemovePasswordFromAdmin < ActiveRecord::Migration[6.0]
  def change
    remove_column :admins, :password, :string
  end
end
