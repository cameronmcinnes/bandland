class CreateFollowings < ActiveRecord::Migration[5.1]
  def change
    create_table :followings do |t|
      t.integer :followee_id
      t.integer :follower_id

      t.timestamps
    end

    add_index :followings, [:follower_id, :followee_id], unique: true
    add_index :followings, :followee_id
  end
end
