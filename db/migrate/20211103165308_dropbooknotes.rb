class Dropbooknotes < ActiveRecord::Migration[6.1]
  def change
    drop_table :booknotes
  end
end
