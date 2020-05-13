class PlaceOrderController < ApplicationController

  def new
    order_item = OrderItem.new
  end

  def create
    order_item = OrderItem.new
    user_id = params["user_id"];
    order_id = params["order_id"];
    total = params["total"]

    order_params.each do |item|
        product_id = item["id"]
        product_quantity = item["count"]
        product_price = item["price"]
        product_title = item["name"]

        order_hash = Hash.new
        order_hash["user_id"] = user_id.to_i;
        order_hash["product_id"] = product_id.to_i;
        order_hash["product_quantity"] = product_quantity.to_i;
        order_hash["product_price"] = product_price.to_f;
        order_hash["order_id"] = order_id;
        order_hash["product_title"] = product_title;

        order_item = OrderItem.create(order_hash)
    end

    order_h = Hash.new
    order_h["order_id"] = order_id;
    order_h["user_id"] = user_id.to_i;
    order_h["amount"] = total.to_f;

    order = Order.create(order_h)

    OrderMailer.with(order_item: order_item, order_id: order_id).new_order_mail.deliver_later

  end

  private
  def order_params
    params.require(:data)
  end

end
