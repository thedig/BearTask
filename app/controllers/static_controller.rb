class StaticController < ApplicationController
	before_filter :require_current_user!, :only => [:home]
  before_filter :require_no_current_user!, :only => [:welcome]

	def home
		render :home
	end

  def welcome
    render :welcome
  end

end
