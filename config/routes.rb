Rails.application.routes.draw do

  resources :trails, only: [:index, :show, :create]
  resources :visits

  post "/signup", to: "users#create"
  post "/login", to: "sessions#login"
  get "/profile", to: "users#show"
  delete "/logout", to: "sessions#logout"

  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
