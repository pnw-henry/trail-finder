Rails.application.routes.draw do

  resources :trails, only: [:index, :show, :create] do
    resources :visits, only: [:index, :show]
  end

  resources :visits

  resources :users, only: [:create, :destroy]

  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # Practice

  get "/trails/search/:query", to: "trails#search"
  get "/visits/search/:query", to: "visits#search"
  get "/users/search/:query", to: "users#search"

  get "/trails/search_by_elevation/:query", to: "trails#search_by_elevation"
  get "/visits/search_in_summary/:term", to: "visits#search_in_summary"
  get "/users/search_by_experience/:query", to: "users#search_by_experience"

  get "/find_trails_with_visits", to: "trails#find_trails_with_visits"
  get "/find_users_with_visits", to: "users#find_users_with_visits"
  get "/find_visits_by_user/:username", to: "visits#find_visits_by_user"

  
  # Routing logic: fallback requests for React Router.
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
