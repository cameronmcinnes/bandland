module Taggable
  extend ActiveSupport::Concern

  included do
    has_many :taggings, as: :taggable, dependent: :destroy
    has_many :tags, through: :taggings
  end

  def tag(name)
    name.strip!
    tag = Tag.find_or_create_by_name(name)
    self.taggings.find_or_create_by_tag_id(tag.id)
  end

  def tag_names
    tags.map(&:name)
  end
end
