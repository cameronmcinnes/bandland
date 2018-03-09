class AddAttachmentCoverImgToAlbums < ActiveRecord::Migration[5.1]
  def self.up
    change_table :albums do |t|
      t.attachment :cover_img
    end
  end

  def self.down
    remove_attachment :albums, :cover_img
  end
end
