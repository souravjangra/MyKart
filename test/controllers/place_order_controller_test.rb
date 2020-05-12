require 'test_helper'

class PlaceOrderControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get place_order_create_url
    assert_response :success
  end

end
