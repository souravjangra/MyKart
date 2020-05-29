class Backend::ProductsController < ApplicationController

  include Rails.application.routes.url_helpers
  before_action :logged_in_user

  def index
    @products = Product.all
  end

  def new
    @product = Product.new
  end

  def create
    @product = Product.new(product_params)
    @product.product_image.attach(product_params[:image])

    if @product.save
        image_path = Rails.application.routes.url_helpers.rails_blob_url(@product.product_image, :host => "localhost:5000")

        @product.update_attribute(:image, image_path)
        flash[:success] = "Successfully created!"
        redirect_to :action => 'index'
    else
        render 'new'
    end
  end

  def edit
    @product = Product.find(params[:id])

  end

  def update
    @product = Product.find(params[:id])
        if product_params[:image]
        @product.product_image.attach(product_params[:image])

        image_path = Rails.application.routes.url_helpers.rails_blob_url(@product.product_image, :host => "localhost:5000")
#         image_path = ActiveStorage::Blob.service.send(:path_for, @product.product_image.blob.key)
#         image_path.slice! Rails.root.to_s
#
#         product_params[:image] = image_path
        attributes = product_params.clone
        attributes[:image] = image_path
#         puts "attributes: #{attributes[:image]}"
#         @product.update_attribute(:image, image_path)

        @product.update(attributes)
        redirect_to :action => 'index'

        elsif
            @product.update(product_params)
            redirect_to :action => 'index'
        end
  end

  def destroy
    @product = Product.find(params[:id])
    @product.destroy

    redirect_to backend_products_path
  end

  private
  def product_params
    params.require(:product).permit(:sku, :name, :description, :price, :quantity, :image)
  end

end
