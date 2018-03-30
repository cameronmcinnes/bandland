require 'test_helper'

class FollowingsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get followings_create_url
    assert_response :success
  end

  test "should get destroy" do
    get followings_destroy_url
    assert_response :success
  end

  test "should get index" do
    get followings_index_url
    assert_response :success
  end

end
