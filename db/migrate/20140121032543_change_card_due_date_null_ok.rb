class ChangeCardDueDateNullOk < ActiveRecord::Migration
  def change
  	change_column :cards, :due_date, :date, :null => true
  end
end
