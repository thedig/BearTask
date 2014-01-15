# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string(255)      not null
#  password_digest :string(255)      not null
#  session_token   :string(255)      not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  attr_accessible :password, :session_token, :username

  validates :username, :session_token, :password_digest, :presence => true
  validates :password, :length => {:minimum => 6}

  before_validation :reset_session_token

  has_many :boards

  def self.generate_token
  	SecureRandom.urlsafe_base64
  end

  def self.find_by_credentials(usr, pas)
  	@user = User.find_by_username(usr)
  	return @user if @user && @user.is_password?(pas)
  end

  def is_password?(pt)
  	BCrypt::Password.new(self.password_digest).is_password?(pt)
  end

  def password=(pt)
  	@password = pt
  	self.password_digest = BCrypt::Password.create(pt)
  end

  def reset_session_token
  	self.session_token = User.generate_token
  end

end
