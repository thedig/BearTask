# == Schema Information
#
# Table name: checklists
#
#  id         :integer          not null, primary key
#  name       :string(255)      not null
#  card_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class ChecklistTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
