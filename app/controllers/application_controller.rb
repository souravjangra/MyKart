class ApplicationController < ActionController::Base
    protect_from_forgery with: :null_session
    include SessionHelper

    def logged_in_user
       unless logged_in?
         store_location
         flash[:danger] = "Please log in."
         redirect_to backend_login_path
       end
    end

end
