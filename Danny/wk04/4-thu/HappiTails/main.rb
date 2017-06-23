require "pry"
require_relative "animal.rb"
require_relative "animal_collection.rb"





def display_list items, animals
  items.each_with_index do |item, index|
    puts "#{index + 1}. #{item}"
  end
  index = gets.chomp.to_i

  if (index < 1 || index > items.length)
    display_list items, animals
  end

  if index == 3
    animals.push(add_animal)
    display_list items, animals
  end
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
  toys = []
  add_animal_toy toys
  return Animal.new name, age, gender, species, toys
end

def add_animal_toy toys
  puts "Do you want to enter a toy? (y/n)"
  option = gets.chomp.downcase
  if option == "y"
    puts "Please enter a toy"
    toys.push(gets.chomp)
    add_animal_toy toys
  elsif option != "n" && option != "y"
    puts "Invalid input, please try again"
    add_animal_toy toys
  end
  return toys
end

menu_item = ["display all animals", "display all clients", "create an animal", "create an client", "adopts an animal", "unadopts an animal"]
animals = []
puts "Welcome to HappiTails!\nWhat can we help today?"
display_list menu_item, animals


binding.pry
