class Review < ApplicationRecord
  belongs_to :user
  belongs_to :movie


  def movietitle
    self.movie.title
  end

  def movieyear
    self.movie.year
  end 





end
