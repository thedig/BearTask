class CardsController < ApplicationController


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
