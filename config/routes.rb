MyTrello::Application.routes.draw do

  resources :users, :only => [:new, :create, :show]
  resource :session, :only => [:new, :create, :destroy]

  resources :boards, :only => [:new, :create, :show]

	root to: "static#home"
end
