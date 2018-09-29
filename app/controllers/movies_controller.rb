class MoviesController < ApplicationController

def all
movies = Movie.all
render json: movies
end


end
