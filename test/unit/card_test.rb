# == Schema Information
#
# Table name: cards
#
#  id          :integer          not null, primary key
#  description :string(255)      not null
#  due_date    :date
#  list_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  position    :integer          not null
#

require 'test_helper'

class CardTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
