class UsersController < ApplicationController
	
	def create
		@user = User.new(params[:user])
		if @user.save
			login!(@user)
			redirect_to root_url
		else
			flash.now[:errors] = @user.errors.full_messages
			render :new
		end
	end

	def index
		render :index
	end

	def new
		render :new
	end

	# require login? - profile?
	def show
		@user = User.find(params[:id])
		render :show
	end

end
