class StaticController < ApplicationController
	before_filter :require_current_user!, :only => [:home]

	def home
		render :home
	end
end
