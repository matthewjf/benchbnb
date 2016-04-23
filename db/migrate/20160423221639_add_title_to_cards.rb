class AddTitleToCards < ActiveRecord::Migration
  def change
    add_column :benches, :title, :string
  end
end
