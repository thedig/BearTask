class CreateCards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.string :description, :null => false
      t.date :due_date, :null => false
      t.integer :card_id, :null => false

      t.timestamps
    end
  end
end
