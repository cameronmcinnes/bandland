Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update, :index] do
      resources :albums, only: :create
    end
    resource :session, only: [:create, :destroy]
    resources :albums, only: [:show, :index]
  end
end
