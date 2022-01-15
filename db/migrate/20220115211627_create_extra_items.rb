class CreateExtraItems < ActiveRecord::Migration[6.1]
  def change
    create_table :extra_items do |t|
      t.belongs_to :extra, null: false, foreign_key: true
      t.text :detail

      t.timestamps
    end
  end
end
