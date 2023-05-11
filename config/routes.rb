Rails.application.routes.draw do

  resources :trails, only: [:index, :show, :create] do
    resources :visits, only: [:index, :show]
  end

  resources :visits

  resources :users, only: [:create]

  get "/current_user", to: "users#show"
  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#logout"

  
  # Routing logic: fallback requests for React Router.
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
