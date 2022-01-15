class CreateBassoonResources < ActiveRecord::Migration[6.1]
  def change
    create_table :bassoon_resources do |t|
      t.string :name
      t.string :desc
      t.string :details

      t.timestamps
    end
  end
end
