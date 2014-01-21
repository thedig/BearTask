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

class Checklist < ActiveRecord::Base
  attr_accessible :card_id, :name

  validates :card_id, :name, :presence => true

  belongs_to :card
end
