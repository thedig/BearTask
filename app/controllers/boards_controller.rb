class BoardsController < ApplicationController
	before_filter :require_current_user!, :only => [:index, :create]

	def create
		params[:board][:user_id] = current_user.id
		@board = Board.new(params[:board])
		if @board.save
			render :json => @board
		else
			flash.now[:errors] = @board.errors.full_messages
			# render :new
		end
	end

	def destroy
		@board = Board.find(params[:id])
		@board.destroy
		render :json => @board
	end

	def new
		render :new
	end

	def show
		@board = Board.find(params[:id])
		render :show
	end

	def update
		@board = Board.find(params[:id])
		if @board.update_attributes(params[:board])
			render :json => @board
		else
			flash.now[:errors] = @board.errors.full_messages
		end
	end

	def index
		@boards = current_user.boards
		respond_to do |format|
			format.html { render :index }
			# format.json { render :json => Board.all.to_json(:include => :lists)}
			# format.json { render :json => @boards.to_json(:include => { :lists => { :include => :cards }}) }
			format.json { render :json => @boards.to_json(:include => { :lists => { :include => {:cards => { :include => :checklists }}}}) }
		end
	end

end
