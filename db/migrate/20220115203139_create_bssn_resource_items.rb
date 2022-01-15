class CreateBssnResourceItems < ActiveRecord::Migration[6.1]
	def change
		create_table :bssn_resource_items do |t|
			t.belongs_to :bassoon_resource, null: false, foreign_key: true
			t.text :detail

			t.timestamps
		end
	end
end
