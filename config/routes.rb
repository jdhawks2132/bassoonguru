Rails.application.routes.draw do
	# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

	namespace :api do
		resources :users, only: %i[index update destroy]
		resources :enrollments, except: [:update]
		resources :comments
		resources :videos, only: %i[index show create]
		resources :courses, only: %i[index show create]
		resources :extra_items, only: %i[index show]
		resources :extras, only: %i[index show]
		post '/signup', to: 'users#create'
		get '/me', to: 'users#show'
		post '/login', to: 'sessions#create'
		delete '/logout', to: 'sessions#destroy'
	end
	get '*path',
	    to: 'fallback#index',
	    constraints: ->(req) { !req.xhr? && req.format.html? }
end
