class Allergies
  @@list = ["eggs", "peanuts", "shellfish", "strawberries", "tomatoes", "chocolate", "poollen", "cats"]

  def initialize score
    @score = score
  end

  def allergic_to? item
    binaryScore = @score.to_s(2).split("").reverse
    binaryScore[@@list.find_index(item)] == "1"
  end

  def list
    binaryScore = @score.to_s(2).split("").reverse
    index = 0
    return_list = []
    while binaryScore.length > 0 do
      if binaryScore.shift == "1"
        return_list.push(@@list[index])
      end
      index += 1
    end
    return_list
  end


end
