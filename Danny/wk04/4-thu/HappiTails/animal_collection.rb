require_relative "animal.rb"

class AnimalCollection
  def initialize
    @animals = []
  end

  def add_animal animal
    @animals.push(animal)
  end

end
