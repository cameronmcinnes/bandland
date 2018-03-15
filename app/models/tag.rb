class Tag < ApplicationRecord
  validates :name, presence: true

  has_many :taggings
  has_many :albums, through: :taggings, source: :taggable,
    source_type: 'Album'
  has_many :users, through: :taggings, source: :taggable,
    source_type: 'User'
end
