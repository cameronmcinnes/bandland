class AddAttachmentAudioFileToTracks < ActiveRecord::Migration[5.1]
  def self.up
    change_table :tracks do |t|
      t.attachment :audio_file
    end
  end

  def self.down
    remove_attachment :tracks, :audio_file
  end
end
