module Taggable
  extend ActiveSupport::Concern

  included do
    has_many :taggings, as: :taggable, dependent: :destroy
    has_many :tags, through: :taggings
  end

  # submit tags one by one
  def tag(name)
    name.strip!
    tag = Tag.find_or_create_by_name(name)
    self.taggings.find_or_create_by_tag_id(tag.id)
  end

  # submit tags as an array of names
  def tag_names=(tag_names)
    self.tags = tag_names.map do |tag_name|
      Tag.find_or_create_by(name: tag_name)
    end
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
