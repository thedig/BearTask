class ListsController < ApplicationController

	def create
		@list = List.new(params[:list])
		if @list.save
			render :json => @list
		else
			flash.now[:errors] = @list.errors.full_messages
		end

	end

	def index
		respond_to do |format|
			format.html { render :index }
			# format.json { render :json => Board.all.to_json(:include => :lists)}
			format.json { render :json => List.all.to_json(:include => :cards) }

		end
	end

	def show
		@list = List.find(params[:id])
		render :show
	end

end
