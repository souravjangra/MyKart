class Backend::SessionController < ApplicationController
  include SessionHelper

  def new
    @admin = Admin.new
  end

  def create
    @admin = Admin.find_by(username: params[:session][:username])
    if @admin && @admin.authenticate(params[:session][:password])
        log_in @admin
        redirect_back_or '/backend/home'
    else
        flash.now[:danger] = 'Invalid email/password combination'
        render 'new'
    end
  end

  def destroy
    log_out
    redirect_to '/backend/login'
  end

  private
  def admin_params
    params.require(:session).permit(:username, :password, :password_digest)
  end

end
