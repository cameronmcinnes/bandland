class CreateTaggings < ActiveRecord::Migration[5.1]
  def change
    create_table :taggings do |t|
      t.integer :tag_id
      t.references :taggable, polymorphic: true, index: true
      t.timestamps
    end
  end
end
