Rails.application.routes.draw do
  # get '/articles', to: 'articles#index'

  resources :articles do
    resources :comments
  end



  get '/api/articles/:id',           to: 'api/articles#show'
  get '/api/articles/:id/comments',  to: 'api/articles#show_comments'
  get '/api/stuff',                  to: 'articles#stuff'



end
