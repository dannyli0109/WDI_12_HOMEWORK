class Allergies
  @@list = ["eggs", "peanuts", "shellfish", "strawberries", "tomatoes", "chocolate", "poollen", "cats"]

  def initialize score
    @score = score
  end

  def allergic_to? item
    !!self.list.find_index(item)
  end

  def list
    binaryScore = @score.to_s(2).split("").reverse
    return_list = []
    for i in 0...binaryScore.length
      if binaryScore.shift == "1"
        return_list.push(@@list[i])
      end
    end
    return_list
  end
end
