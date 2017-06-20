require "pry"
# round3
def toonify(accent, sentence)
  accents = ["daffy", "elmer"]
  replaceString = [["s", "th"], ["r", "w"]]
  returnString = ""
  index = accents.index(accent)
  if index != nil
    sentence.chars.each do |character|
      if character == replaceString[index][0]
        returnString += replaceString[index][1]
      else
        returnString += character
      end
    end
  end
  return returnString
end

binding.pry
