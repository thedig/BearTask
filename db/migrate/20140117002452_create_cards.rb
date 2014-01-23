class CreateCards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.string :description, :null => false
      t.date :due_date
      t.integer :list_id, :null => false
      t.float :position, :null => false

      t.timestamps
    end
  end
end
