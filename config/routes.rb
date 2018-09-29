Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post '/api/users', to: 'users#show'
  post '/api/register', to: 'users#create'

  get '/api/movies', to: 'movies#all'

end
