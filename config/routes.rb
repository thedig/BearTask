MyTrello::Application.routes.draw do

  resources :users, :only => [:new, :create, :show]
  resource :session, :only => [:new, :create, :destroy]

  resources :boards do
  	resources :lists, only: [:index, :create, :destroy, :update]
  end

  resources :lists, only: [:show] do
  	resources :cards, only: [:index, :create, :destroy, :update]
	end

	resources :cards, only: [:show] do
    resources :checklists
  end


	root to: "static#home"

end
