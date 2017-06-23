require_relative "animal.rb"
require_relative "client.rb"
class Shelter
  def initialize
    @clients = {}
    @animals = {}
    animal = Animal.new "he", 10, "dsa", "dsajd"
    @animals["he"] = animal
  end

  def add_animal
    puts "Please enter the name of the animal"
    name = gets.chomp
    puts "Please enter the age of the animal"
    age = gets.chomp.to_i
    puts "Please enter the gender of the animal"
    gender = gets.chomp
    puts "Please enter the species of the animal"
    species = gets.chomp
    animal = Animal.new name, age, gender, species
    animal.add_animal_toy
    @animals[name] = animal
  end

  def add_client
    puts "Please enter the name of the client"
    name = gets.chomp
    puts "Please enter the number of children of the client"
    number_of_children = gets.chomp
    puts "Please enter the age of the client"
    age = gets.chomp
    client = Client.new name, number_of_children, age
    @clients[name] = client
  end

  def adopt adopting
    puts "Please eneter the client's name"
    name = gets.chomp
    if @clients[name] == nil
      puts "Client not found"
    else
      if adopting
        @clients[name].adopt @animals
      else
        @clients[name].unadopt @animals
      end
    end
  end



  def display_animals
    puts "Animals\n**********************"
    @animals.each do |name, animal|
      puts animal.display
      puts "----------------------"

    end
  end

  def display_clients
    puts "Clients\n**********************"
    @clients.each do |name, client|
      puts client.display
      puts "----------------------"

    end
  end


end
