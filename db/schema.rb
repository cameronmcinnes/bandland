# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180310223937) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "albums", force: :cascade do |t|
    t.string "title", null: false
    t.integer "price"
    t.text "description"
    t.string "genre"
    t.integer "artist_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "cover_img_file_name"
    t.string "cover_img_content_type"
    t.integer "cover_img_file_size"
    t.datetime "cover_img_updated_at"
    t.index ["artist_id"], name: "index_albums_on_artist_id"
    t.index ["title"], name: "index_albums_on_title"
  end

  create_table "collectings", force: :cascade do |t|
    t.integer "collector_id"
    t.integer "collected_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["collected_id"], name: "index_collectings_on_collected_id"
    t.index ["collector_id", "collected_id"], name: "index_collectings_on_collector_id_and_collected_id", unique: true
  end

  create_table "tracks", force: :cascade do |t|
    t.string "title", null: false
    t.integer "ord", null: false
    t.integer "album_id"
    t.integer "duration"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "audio_file_file_name"
    t.string "audio_file_content_type"
    t.integer "audio_file_file_size"
    t.datetime "audio_file_updated_at"
    t.index ["album_id"], name: "index_tracks_on_album_id"
    t.index ["title"], name: "index_tracks_on_title"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email", null: false
    t.string "location"
    t.string "own_site_url"
    t.text "description"
    t.string "profile_img_file_name"
    t.string "profile_img_content_type"
    t.integer "profile_img_file_size"
    t.datetime "profile_img_updated_at"
    t.string "banner_img_file_name"
    t.string "banner_img_content_type"
    t.integer "banner_img_file_size"
    t.datetime "banner_img_updated_at"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["location"], name: "index_users_on_location"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
