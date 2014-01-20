class BoardsController < ApplicationController
	
	def create
		params[:board][:user_id] = current_user.id
		@board = Board.new(params[:board])
		if @board.save
			render :json => @board
		else
			flash.now[:errors] = @user.errors.full_messages
			render :new
		end
	end

	def new
		render :new
	end

	def show
		@board = Board.find(params[:id])
		render :show
	end

	def index
		respond_to do |format|
			format.html { render :index }
			# format.json { render :json => Board.all.to_json(:include => :lists)}
			format.json { render :json => Board.all.to_json(:include => { :lists => { :include => :cards }}) }

		end
	end

end
