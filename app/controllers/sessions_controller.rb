class SessionsController < ApplicationController
	before_filter :require_no_current_user!, :only => [:create, :new]
	before_filter :require_current_user!, :only => [:destroy]


	def create
		@user = User.find_by_credentials(params[:session][:username],
			params[:session][:password])
		if @user
			login!(@user)
			redirect_to home_url
		else
			flash.now[:errors] = ["Invalid login"]
			render :new
		end
	end

	def destroy
		logout!
		redirect_to root_url
	end

	def new
		render :new
	end
end
