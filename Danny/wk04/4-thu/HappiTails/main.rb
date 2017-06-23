require "pry"
require_relative "animal.rb"
require_relative "shelter.rb"




def display_list items, shelter
  items.each_with_index do |item, index|
    puts "#{index + 1}. #{item}"
  end
  index = gets.chomp.to_i

  if (index < 1 || index > items.length)
    display_list items, shelter
  end

  if index == 1
    shelter.display_animals
  elsif index == 2
    shelter.display_clients
  elsif index == 3
    shelter.add_animal
  elsif index == 4
    shelter.add_client
  elsif index == 5
    shelter.adopt true
  elsif index == 6
    shelter.adopt false
  end
  display_list items, shelter
end







menu_item = ["display all animals", "display all clients", "create an animal", "create an client", "adopts an animal", "unadopts an animal"]

puts "Welcome to HappiTails!\nWhat can we help today?"
shelter = Shelter.new
display_list menu_item, shelter


binding.pry
