# == Schema Information
#
# Table name: albums
#
#  id                     :integer          not null, primary key
#  title                  :string           not null
#  price                  :integer
#  description            :text
#  genre                  :string
#  artist_id              :integer
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  cover_img_file_name    :string
#  cover_img_content_type :string
#  cover_img_file_size    :integer
#  cover_img_updated_at   :datetime
#

class Album < ApplicationRecord
  validates :title, presence: true
  validates :title, uniqueness: { scope: :artist_id,
    message: "Can't have two albums by the same title" }

  has_attached_file :cover_img, default_url: "missing_cover_img.png", styles: {
    thumb: '48x48'
  }
  validates_attachment_content_type :cover_img, content_type: /\Aimage\/.*\Z/

  belongs_to :artist, class_name: :User, foreign_key: :artist_id
  has_many :collectings, foreign_key: :collected_id
  has_many :collectors, through: :collectings, source: :collector
  has_many :tracks, inverse_of: :album

  accepts_nested_attributes_for :tracks
end
