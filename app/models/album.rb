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

  belongs_to :artist, class_name: :User
end
