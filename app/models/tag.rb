# == Schema Information
#
# Table name: tags
#
#  id         :integer          not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tag < ApplicationRecord
  validates :name, presence: true

  has_many :taggings
  has_many :albums, through: :taggings, source: :taggable,
    source_type: 'Album'
  has_many :users, through: :taggings, source: :taggable,
    source_type: 'User'
end
