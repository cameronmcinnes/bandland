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

require 'test_helper'

class AlbumTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
