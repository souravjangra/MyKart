class OrderController < ApplicationController
    def index
        order = Order.where(user_id: params[:user_id])
        render json: order
    end

    def order_params
    end
end
