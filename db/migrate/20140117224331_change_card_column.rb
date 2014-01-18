class ChangeCardColumn < ActiveRecord::Migration
  def change
  	rename_column :cards, :card_id, :list_id
  end
end
