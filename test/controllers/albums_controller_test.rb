require 'test_helper'

class AlbumsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get albums_create_url
    assert_response :success
  end

  test "should get show" do
    get albums_show_url
    assert_response :success
  end

end
