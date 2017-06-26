
require 'sinatra'
require 'httparty'
require 'pry'
require 'sinatra/reloader'

apikey = "2f6435d9"

get '/' do
  erb :index
end

get "/search_result" do
  movie = params["movie"]
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
    @result = HTTParty.get("http://www.omdbapi.com/?i=#{@result["Search"][0]["imdbID"]}&apikey=#{apikey}").parsed_response
    erb :movie_details
  else
    erb :search_result
  end
end

get "/movie_details/:id" do
  title = params[:id]
  @result = HTTParty.get("http://www.omdbapi.com/?i=#{title}&apikey=#{apikey}").parsed_response
  erb :movie_details
end
