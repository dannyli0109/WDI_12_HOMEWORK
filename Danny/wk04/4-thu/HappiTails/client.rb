class Client
  def initialize name, number_of_children, age
    @name = name
    @number_of_children = number_of_children
    @age = age
    @pets = []
  end

=begin
  def add_pet animals
    puts "Do you want to enter a pet? (y/n)"
    option = gets.chomp.downcase
    if option == "y"
      puts "What is the name of your pet?"
      name = gets.chomp
      if animals[name] == nil
        puts "Animal: #{name} does not exist, please try again"
        add_pet animals
      else
        @pets.push(animals[name])
        add_pet animals
      end
    elsif option != "n" && option != "y"
      puts "Invalid input, please try again"
      add_pet animals
    end
  end
=end

  def adopt animals
    puts "Which animal do you want to adopt?"
    name = gets.chomp
    if animals[name] == nil
      puts "Animal: #{name} does not exist, please try again"
    else
      if animals[name].is_avaliable
        @pets.push(animals[name])
        animals[name].set_avaliable false
        puts "Congratulations!, #{name} is now yours"
      else
        puts "Sorry, this animal has been adopted by some one else"
      end
    end
  end

  def unadopt animals
    puts "Which animal do you want to unadopt?"
    name = gets.chomp
    index = get_pets_index name
    if index == -1
      puts "You don't own this animal, please try again"
    else
      @pets.delete_at(index)
      animals[name].set_avaliable true
      puts "You have put #{name} up for adoption!"
    end
  end

  def display
    returnString = "name: #{@name}\nnumber of children: #{@number_of_children}\nage: #{@age}\n"
    if @pets.length > 0
      returnString += "pets: \n"
      @pets.each do |pet|
        returnString += "- name: #{pet.get_name}\n"
      end
    end
    return returnString
  end

  def get_pets_index name
    @pets.each_with_index do |pet, index|
        if pet.get_name == name
          return index
        end
    end
    return -1
  end


end
