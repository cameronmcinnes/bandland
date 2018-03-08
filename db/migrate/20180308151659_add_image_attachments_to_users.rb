class AddImageAttachmentsToUsers < ActiveRecord::Migration[5.1]
  def self.up
    change_table :users do |t|
      t.attachment :profile_img
      t.attachment :banner_img
    end
  end

  def self.down
    remove_attachment :users, :profile_img
    remove_attachment :users, :banner_img
  end
end
