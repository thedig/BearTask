class CreateChecklists < ActiveRecord::Migration
  def change
    create_table :checklists do |t|
      t.string :name, :null => false
      t.integer :card_id, :null => false

      t.timestamps
    end
  end
end
