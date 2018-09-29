class ChangeMovies < ActiveRecord::Migration[5.2]
  def change
    change_column :movies, :year, :string 
  end
end
