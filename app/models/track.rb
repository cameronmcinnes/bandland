# == Schema Information
#
# Table name: tracks
#
#  id                      :integer          not null, primary key
#  title                   :string           not null
#  ord                     :integer          not null
#  album_id                :integer
#  duration                :integer
#  created_at              :datetime         not null
#  updated_at              :datetime         not null
#  audio_file_file_name    :string
#  audio_file_content_type :string
#  audio_file_file_size    :integer
#  audio_file_updated_at   :datetime
#

class Track < ApplicationRecord
  validates :title, :album_id, :ord, presence: true
  validates :title, uniqueness: { scope: :album_id }
  validates :ord, uniqueness: { scope: :album_id }

  has_attached_file :audio_file
  validates_attachment_content_type :audio_file,
    :content_type => [ 'audio/mpeg', 'audio/x-mpeg', 'audio/mp3',
      'audio/x-mp3', 'audio/mpeg3', 'audio/x-mpeg3', 'audio/mpg',
      'audio/x-mpg', 'audio/x-mpegaudio' ]

  belongs_to :album
end
