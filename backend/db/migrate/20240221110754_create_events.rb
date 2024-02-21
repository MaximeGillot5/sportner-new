class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.string :event_name
      t.string :description
      t.string :location

      t.timestamps
    end
  end
end
