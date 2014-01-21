MyTrello::Application.routes.draw do

  resources :users, :only => [:new, :create, :show]
  resource :session, :only => [:new, :create, :destroy]

  resources :boards do
  	resources :lists, only: [:index, :create]
  end

  resources :lists, only: [:show] do
  	resources :cards, only: [:index, :create, :destroy]
	end

	resources :cards, only: [:show]


	root to: "static#home"

end
