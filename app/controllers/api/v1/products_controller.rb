class Api::V1::ProductsController < ApplicationController

  def index
    render json: Product.all
  end

  def create
      if params[:product]
        product = Product.new(product_params)
        if product.valid?
              if Product.find_by sku: params[:product][:sku]
                render json: {status: 'error', message: "This product already exists", code: "200"}
              else
                product = Product.create(product_params)
                render json: params.require(:product)
              end
        else
            render json: {status: 'error', message: product.errors}
        end
      else
        render json: {status: 'error', message: "Bad Request", code: "400"}
      end
#     render json: params.require(:product)
#     product = Product.create(product_params)
  end

  def destroy
    Product.destroy(params[:id])
    render json: {status: 'success', message: 'Successfully deleted', code: "200"}
  end

  def update
    product = Product.find(params[:id])
    product.update_attributes(product_params)
    render json: {status: 'success',message: 'Successfully updated',data: product, code: "200"}
  end

  private
  def product_params
    params.require(:product).permit(:id, :sku, :name, :description, :price, :quantity)
  end

end
