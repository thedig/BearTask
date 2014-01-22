class ListsController < ApplicationController

	def create
		params[:list][:board_id] = params[:board_id]
		@list = List.new(params[:list])
		if @list.save
			render :json => @list
		else
			flash.now[:errors] = @list.errors.full_messages
		end
	end

	def destroy
		@list = List.find(params[:id])
		@list.destroy
		render :json => @list
	end

	def index
		respond_to do |format|
			format.html { render :index }
			format.json { render :json => List.all.to_json(:include => :cards) }
		end
	end

	def show
		@list = List.find(params[:id])
		render :show
	end

	def update
		@list = List.find(params[:id])
		if @list.update_attributes(params[:list])
			render :json => @list
		else
			flash.now[:errors] = @list.errors.full_messages
		end
	end

end
