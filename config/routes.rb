Rails.application.routes.draw do
  root 'home#index'
  get 'home/index'

  get '*path', to: "home#index", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
