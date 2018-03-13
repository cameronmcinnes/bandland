class AddDisplayNameAndGenreToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :display_name, :string
    add_column :users, :genre, :string
    add_index :users, :display_name
  end
end
