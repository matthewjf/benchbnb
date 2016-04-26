class AddImageUrlsToBenches < ActiveRecord::Migration
  def change
    add_column :benches, :image_urls, :json
  end
end
