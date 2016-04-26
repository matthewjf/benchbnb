class UpdateBenchColumns < ActiveRecord::Migration
  def change
    remove_column :benches, :title
    add_column :benches, :seating, :integer
  end
end
