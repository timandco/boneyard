class CreateToDos < ActiveRecord::Migration
  def change
    create_table :to_dos do |t|
      t.string :task
      t.datetime :due

      t.timestamps null: false
    end
  end
end
