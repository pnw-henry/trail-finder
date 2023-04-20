class CreateVisits < ActiveRecord::Migration[6.1]
  def change
    create_table :visits do |t|
      t.date :date
      t.string :condition
      t.text :summary
      t.integer :user_id
      t.integer :trail_id

      t.timestamps
    end
  end
end
