class CreateVideos < ActiveRecord::Migration[6.1]
  def change
    create_table :videos do |t|
      t.string :title
      t.string :url
      t.belongs_to :course, null: false, foreign_key: true

      t.timestamps
    end
  end
end
