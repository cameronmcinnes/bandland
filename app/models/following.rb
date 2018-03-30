# == Schema Information
#
# Table name: followings
#
#  id          :integer          not null, primary key
#  followee_id :integer
#  follower_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Following < ApplicationRecord
  belongs_to :follower, class_name: :User
  belongs_to :followee, class_name: :User
end
