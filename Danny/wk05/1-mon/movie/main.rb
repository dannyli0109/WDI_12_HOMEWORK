
require 'sinatra'
require 'httparty'
require 'pry'
require 'sinatra/reloader'
require 'pg'

apikey = "2f6435d9"

def run_sql(sql)
  conn = PG.connect(dbname: 'movie_db')
  result = conn.exec(sql)
  conn.close
  return result
end

def add_movie id
  columns = ["imdbID", "Title", "Year", "Rated", "Released", "Genre", "Director", "Writer", "Actors", "Poster"]
  apikey = "2f6435d9"

  find_exist = "SELECT * FROM movies WHERE imdbID = '#{id}'"
  if run_sql(find_exist).count == 0
    @result = HTTParty.get("http://www.omdbapi.com/?i=#{id}&apikey=#{apikey}").parsed_response

    i = 0
    value_array = []

    while i < columns.length
      result_copy = @result[columns[i]]
      result_copy = result_copy.gsub(/'/,"''")
      value_array.push("'" + result_copy + "'")
      i += 1
    end
    sql = "INSERT INTO movies (#{columns.join(", ")}) VALUES (#{value_array.join(", ")})"
    run_sql(sql)
  else
    @result = run_sql(find_exist)[0]
    @result = Hash[@result.map {|key, value| [key.capitalize, value] }]
  end
end



get '/' do
  erb :index
end

get "/movies" do
  movie = params["movie"]
  movie = movie.tr(
  "ÀÁÂÃÄÅàáâãäåĀāĂăĄąÇçĆćĈĉĊċČčÐðĎďĐđÈÉÊËèéêëĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħÌÍÎÏìíîïĨĩĪīĬĭĮįİıĴĵĶķĸĹĺĻļĽľĿŀŁłÑñŃńŅņŇňŉŊŋÒÓÔÕÖØòóôõöøŌōŎŏŐőŔŕŖŗŘřŚśŜŝŞşŠšſŢţŤťŦŧÙÚÛÜùúûüŨũŪūŬŭŮůŰűŲųŴŵÝýÿŶŷŸŹźŻżŽž",
  "AAAAAAaaaaaaAaAaAaCcCcCcCcCcDdDdDdEEEEeeeeEeEeEeEeEeGgGgGgGgHhHhIIIIiiiiIiIiIiIiIiJjKkkLlLlLlLlLlNnNnNnNnnNnOOOOOOooooooOoOoOoRrRrRrSsSsSsSssTtTtTtUUUUuuuuUuUuUuUuUuUuWwYyyYyYZzZzZz"
)

  @result = HTTParty.get("http://www.omdbapi.com/?s=#{movie}&apikey=#{apikey}").parsed_response
  FileUtils.cd("public") do
    if !File.directory?("history")
      FileUtils.mkdir("history")
    end

    FileUtils.cd("history") do
      if !File::exists?( "logging.txt" )
        File.new("logging.txt", "a+")
      end

      File.open("logging.txt","a") do |file|
        file << "#{Time.now},'#{movie}'\n"
      end
    end
  end

  if @result["Error"] != nil
    erb :error
  elsif @result["Search"].count == 1
    id = @result["Search"][0]["imdbID"]
    add_movie id
    erb :movie_details
  else
    erb :search_result
  end
end

get "/movies/:id" do
  id = params[:id]
  # hash of the movie
  add_movie id
  erb :movie_details
end
