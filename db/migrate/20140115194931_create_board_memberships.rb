class CreateBoardMemberships < ActiveRecord::Migration
  def change
    create_table :board_memberships do |t|
      t.integer :member_id, :null => false
      t.integer :board_id, :null => false

      t.timestamps
    end
		add_index :board_memberships, :member_id
		add_index :board_memberships, :board_id

  end
end
