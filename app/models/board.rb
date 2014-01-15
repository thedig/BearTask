# == Schema Information
#
# Table name: boards
#
#  id         :integer          not null, primary key
#  title      :string(255)      not null
#  user_id    :integer          not null
#  public     :boolean          not null
#  comments   :boolean          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Board < ActiveRecord::Base
  attr_accessible :comments, :public, :title, :user_id

  belongs_to :user
end
