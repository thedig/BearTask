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

class Card < ActiveRecord::Base
  attr_accessible :description, :due_date, :list_id, :position

  belongs_to :list
  has_many :checklists
end
