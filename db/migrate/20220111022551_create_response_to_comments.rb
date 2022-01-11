class CreateResponseToComments < ActiveRecord::Migration[6.1]
  def change
    create_table :response_to_comments do |t|
      t.belongs_to :comment, null: false, foreign_key: true
      t.belongs_to :response, null: false, foreign_key: true

      t.timestamps
    end
  end
end
