class BoardsController < ApplicationController
	
	def create
		params[:board][:user_id] = current_user.id
		@board = Board.new(params[:board])
		if @board.save
			redirect_to board_url(@board)
		else
			flash.now[:errors] = @user.errors.full_messages
			render :new
		end
	end

	def new
		render :new
	end

end
