class CreateTrails < ActiveRecord::Migration[6.1]
  def change
    create_table :trails do |t|
      t.string :name
      t.string :location
      t.string :difficulty
      t.float :length
      t.integer :elevation_gain
      t.integer :highest_point

      t.timestamps
    end
  end
end
