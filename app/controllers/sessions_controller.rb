class SessionsController < ApplicationController
	def create
		@user = User.find_by_credentials(params[:session][:username], 
			params[:session][:password])
		if @user
			login!(@user)
			redirect_to root_url
		else
			flash.now[:errors] = @user.errors.full_messages
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
