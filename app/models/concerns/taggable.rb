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

  def tags_string
    tags.map(&:name).join(', ')
  end

  def tag_names
    tags.map(&:name)
  end

  module ClassMethods
    def by_tag_name(tag_name)
      self.joins(:tags).where('tags.name' => tag_name)
    end
  end
end
