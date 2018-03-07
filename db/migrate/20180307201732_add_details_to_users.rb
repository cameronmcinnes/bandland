class AddDetailsToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :location, :string
    add_column :users, :own_site_url, :string
    add_column :users, :description, :text
    add_index :users, :location
  end
end
