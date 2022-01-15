class CreateExtras < ActiveRecord::Migration[6.1]
  def change
    create_table :extras do |t|
      t.string :name
      t.string :desc
      t.string :details

      t.timestamps
    end
  end
end
