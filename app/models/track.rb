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

  belongs_to :album
end
