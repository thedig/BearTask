class CardsController < ApplicationController

	def create
		params[:card][:list_id] = params[:list_id]
		@card = Card.new(params[:card])
		if @card.save
			render :json => @card
		else
			flash.now[:errors] = @card.errors.full_messages
		end
	end

	def destroy
		@card = Card.find(params[:id])
		@card.destroy
		render :json => "Successful delete"
	end

	def index
		respond_to do |format|
			format.html { render :index }
			# format.json { render :json => Board.all.to_json(:include => :lists)}
			format.json { render :json => Card.all.to_json }

		end
	end

	def show
		@card = Card.find(params[:id])
		render :show 
	end
		

end
