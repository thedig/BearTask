# == Schema Information
#
# Table name: lists
#
#  id         :integer          not null, primary key
#  title      :string(255)      not null
#  position   :float            not null
#  board_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class List < ActiveRecord::Base
  attr_accessible :position, :title, :board_id

  validates :title, :position, :board_id, :presence => true

  belongs_to :board
  has_many :cards

end
