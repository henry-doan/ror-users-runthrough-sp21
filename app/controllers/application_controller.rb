class ApplicationController < ActionController::Base
  # ActionController::InvalidAuthenticityToken error
  # we either need to pass the csrf_token in our controller and add the token as a hidden input to our form. 
  # or have our rails app ignore it 
  protect_from_forgery with: :null_session
end
