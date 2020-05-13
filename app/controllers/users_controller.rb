class UsersController < ApplicationController

    def create
        if User.find_by(email: user_params[:email])
            render json: {errors: "Email already registered."}
        else
            user = User.create(user_params)
                if user.valid?
                    payload = {user_id: user.id}
                    token = encode_token(payload)
                    render json: {user: user, jwt: token, success: 'Successfully Registered'}
                else
                    render json: {errors: user.errors.full_messages}, status: :not_acceptable
                end
        end
    end

    def login
        user = User.find_by(email: params[:email])
        if user && user.authenticate(params[:password])
            payload = {user_id: user.id}
            token = encode_token(payload)
            render json: {user: user, jwt: token, success: "Welcome back, #{user.first_name} #{user.last_name}"}
        else
            render json: {errors: "Log in failed! Email or Password is Invalid!"}
        end
    end

    def auto_login
        if session_user
            render json: session_user
        else
            render json: {errors: "No User Logged In"}
        end
    end

    private
    def user_params
        params.permit(:email, :first_name, :last_name, :password)
    end

end
