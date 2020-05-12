class OrderMailer < ApplicationMailer

    def new_order_mail
        @order = params[:order_item]
        @order_id = params[:order_id]
        mail(to: "imsouravjangra@gmail.com", subject: "Order: #{@order_id} MyKart")
    end
end
