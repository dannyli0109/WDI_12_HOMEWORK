Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/games/magic_8_ball', to: 'games#magic_8_ball'

  get '/games/secret_number', to: 'games#secret_number'

  get '/games/secret_number/response', to: 'games#secret_number_response'


  get '/games/rock_paper_scissors', to: 'games#rock_paper_scissors'

  get '/games/rock_paper_scissors/:throw', to: 'games#rock_papper_scissors_play'

  resources :games

end
