# == Schema Information
#
# Table name: albums
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  price       :integer
#  description :text
#  genre       :string
#  artist_id   :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Album < ApplicationRecord
  validates :title, presence: true
  validates :title, uniqueness: { scope: :artist_id,
    message: "Can't have two albums by the same title" }

  has_attached_file :cover_img, default_url: "missing_cover_img.png"
  validates_attachment_content_type :cover_img, content_type: /\Aimage\/.*\Z/

  belongs_to :artist, class_name: :User, foreign_key: :artist_id
  has_many :collectings, foreign_key: :collected_id
  has_many :collectors, through: :collectings, source: :collector
end
