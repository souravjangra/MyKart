class BackendController < ApplicationController
  include SessionHelper
  before_action :logged_in_user, only: [:show]

  def index
  end

  def new
    @admin = Admin.new
  end

  def create
    @admin = Admin.new(admin_params)
    @admin.save

    render json: {'data'=>@admin}

  end

  def login
    admin = Admin.new(admin_params)
#     puts admin_params[:username]
    user = Admin.find_by username: admin_params[:username]
    if user[:password] == admin_params[:password]
        redirect_to '/backend/home'
    else
        redirect_to '/backend/login'
    end
  end

  def show
    render 'index'
  end

  def home
  end

  def logged_in_user
        unless logged_in?
          flash[:danger] = "Please log in."
        end
  end

  private
  def admin_params
    params.permit(:username, :password, :password_digest)
  end

end
