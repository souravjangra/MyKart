Rails.application.routes.draw do
  get 'session/new'
  default_url_options :host => "localhost:5000"

  namespace :api do
    namespace :v1 do
        resources :products, only: [:index, :create, :destroy, :update]
    end
  end

  namespace :backend do
    resources :products
  end

  namespace :backend do
        get '/login', to: 'session#new'
        post '/login', to: 'session#create'
        delete '/logout', to: 'session#destroy'
  end

#   post '/backend/login', to: 'backend#login', :as => 'backend_login'
  post '/backend/signup', to: 'backend#create'
  post '/backend/products/new', to: 'backend/products#create'
  put '/backend/products/:id/edit', to: 'backend/products#update'

#   get '/backend/login', to: 'backend#index'
  get '/backend/home', to: 'backend#home', :as => 'backend_home'

  resources :backend do
    get 'backend_home'
  end

  root 'homepage#index'
  get '/*path' => 'homepage#index', constraints: lambda { |req|
    req.path.exclude? 'rails/active_storage'
  }

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
