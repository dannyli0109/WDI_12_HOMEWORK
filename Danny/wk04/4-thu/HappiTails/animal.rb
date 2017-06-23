
class Animal
  def initialize name, age, gender, species
    @name = name
    @age = age
    @gender = gender
    @species = species
    @toys = []
    @avaliable = true
    puts "Successfully added an animal"
  end

  def display
    returnString = "name: #{@name}\nage: #{@age}\ngender: #{@gender}\nspecies: #{@species}\navalibility: #{@avaliable}\n"
    if @toys.length > 0
      returnString += "toys: \n"
      @toys.each do |toy|
        returnString += " #{toy}\n"
      end
    end
    return returnString
  end

  def add_animal_toy
    puts "Do you want to enter a toy? (y/n)"
    option = gets.chomp.downcase
    if option == "y"
      puts "Please enter a toy"
      @toys.push(gets.chomp)
      add_animal_toy
    elsif option != "n" && option != "y"
      puts "Invalid input, please try again"
      add_animal_toy
    end
  end

  def get_name
    return @name
  end

  def is_avaliable
    return @avaliable
  end


  def set_avaliable status
    @avaliable = status
  end
end
