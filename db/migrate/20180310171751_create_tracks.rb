class CreateTracks < ActiveRecord::Migration[5.1]
  def change
    create_table :tracks do |t|
      t.string :title, null: false
      t.integer :ord, null: false
      t.integer :album_id
      t.integer :duration

      t.timestamps
    end

    add_index :tracks, :album_id
    add_index :tracks, :title
  end
end
