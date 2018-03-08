class CreateCollectings < ActiveRecord::Migration[5.1]
  def change
    create_table :collectings do |t|
      t.integer :collector_id
      t.integer :collected_id

      t.timestamps
    end

    add_index :collectings, [:collector_id, :collected_id], unique: true
    add_index :collectings, :collected_id
  end
end
