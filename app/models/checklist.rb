class Checklist < ActiveRecord::Base
  attr_accessible :card_id, :name

  validates :card_id, :name, :presence => true

  belongs_to :card
end
