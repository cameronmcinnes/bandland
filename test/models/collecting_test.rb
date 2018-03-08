# == Schema Information
#
# Table name: collectings
#
#  id           :integer          not null, primary key
#  collector_id :integer
#  collected_id :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class CollectingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
