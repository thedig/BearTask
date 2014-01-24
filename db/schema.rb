# encoding: UTF-8
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
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20140124222307) do

  create_table "board_memberships", :force => true do |t|
    t.integer  "member_id",  :null => false
    t.integer  "board_id",   :null => false
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "board_memberships", ["board_id"], :name => "index_board_memberships_on_board_id"
  add_index "board_memberships", ["member_id"], :name => "index_board_memberships_on_member_id"

  create_table "boards", :force => true do |t|
    t.string   "title",      :null => false
    t.integer  "user_id",    :null => false
    t.boolean  "public",     :null => false
    t.boolean  "comments",   :null => false
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
    t.string   "slug"
  end

  add_index "boards", ["title"], :name => "index_boards_on_title"

  create_table "cards", :force => true do |t|
    t.string   "description", :null => false
    t.date     "due_date"
    t.integer  "list_id",     :null => false
    t.float    "position",    :null => false
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

  create_table "checklists", :force => true do |t|
    t.string   "name",       :null => false
    t.integer  "card_id",    :null => false
    t.float    "position",   :null => false
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "friendly_id_slugs", :force => true do |t|
    t.string   "slug",                         :null => false
    t.integer  "sluggable_id",                 :null => false
    t.string   "sluggable_type", :limit => 40
    t.datetime "created_at"
  end

  add_index "friendly_id_slugs", ["slug", "sluggable_type"], :name => "index_friendly_id_slugs_on_slug_and_sluggable_type", :unique => true
  add_index "friendly_id_slugs", ["sluggable_id"], :name => "index_friendly_id_slugs_on_sluggable_id"
  add_index "friendly_id_slugs", ["sluggable_type"], :name => "index_friendly_id_slugs_on_sluggable_type"

  create_table "lists", :force => true do |t|
    t.string   "title",      :null => false
    t.float    "position",   :null => false
    t.integer  "board_id",   :null => false
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "lists", ["title"], :name => "index_lists_on_title"

  create_table "users", :force => true do |t|
    t.string   "username",        :null => false
    t.string   "password_digest", :null => false
    t.string   "session_token",   :null => false
    t.datetime "created_at",      :null => false
    t.datetime "updated_at",      :null => false
  end

  add_index "users", ["session_token"], :name => "index_users_on_session_token", :unique => true
  add_index "users", ["username"], :name => "index_users_on_username", :unique => true

end
