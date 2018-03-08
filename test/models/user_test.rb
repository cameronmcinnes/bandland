# == Schema Information
#
# Table name: users
#
#  id                       :integer          not null, primary key
#  username                 :string           not null
#  password_digest          :string           not null
#  session_token            :string           not null
#  created_at               :datetime         not null
#  updated_at               :datetime         not null
#  email                    :string           not null
#  location                 :string
#  own_site_url             :string
#  description              :text
#  profile_img_file_name    :string
#  profile_img_content_type :string
#  profile_img_file_size    :integer
#  profile_img_updated_at   :datetime
#  banner_img_file_name     :string
#  banner_img_content_type  :string
#  banner_img_file_size     :integer
#  banner_img_updated_at    :datetime
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
