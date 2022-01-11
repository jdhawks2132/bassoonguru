class AddCommentIdToResponses < ActiveRecord::Migration[6.1]
  def change
    add_reference :responses, :comment, null: false, foreign_key: true
  end
end
