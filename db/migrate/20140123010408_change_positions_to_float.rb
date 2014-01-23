class ChangePositionsToFloat < ActiveRecord::Migration
  def change
  	change_column :lists, :position, :float, :null => false
  	change_column :cards, :position, :float, :null => false
  	add_column :checklists, :position, :float, :null => false
  end
end
