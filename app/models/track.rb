# == Schema Information
#
# Table name: tracks
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  ord        :integer          not null
#  album_id   :integer
#  duration   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Track < ApplicationRecord
  validates :title, :album_id, :ord, presence: true
  validates :title, uniqueness: { scope: :album_id }
  validates :ord, uniqueness: { scope: :album_id }

  

  belongs_to :album
end
