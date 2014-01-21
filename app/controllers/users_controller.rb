class UsersController < ApplicationController
	before_filter :require_current_user!, :only => [:show]
	# before_filter :require_no_current_user!, :only => [:create, :new]
	
	def create
		@user = User.new(params[:user])
		p @user
		if @user.save
			login!(@user)
			redirect_to root_url
		else
			flash.now[:errors] = @user.errors.full_messages
			render :new
		end
	end

	def new
		render :new
	end

	def show
		@user = User.find(params[:id])
		render :show
	end

end
