class CreateBoards < ActiveRecord::Migration
  def change
    create_table :boards do |t|
      t.string :title, :null => false
      t.integer :user_id, :null => false
      t.boolean :public, :null => false
      t.boolean :comments, :null => false

      t.timestamps
    end
    add_index :boards, :title
  end

end
