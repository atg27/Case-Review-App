class CreateCases < ActiveRecord::Migration[6.1]
  def change
    create_table :cases do |t|
      t.string :title
      t.string :image
      t.string :caption
      t.string :user_id

      t.timestamps
    end
  end
end
