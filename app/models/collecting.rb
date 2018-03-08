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

class Collecting < ApplicationRecord
end
