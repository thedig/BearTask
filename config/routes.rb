MyTrello::Application.routes.draw do

  resources :user, :only => [:new, :create, :show]
  resources :session, :only => [:new, :create, :destroy]

	root to: "users#index"
end
