require "pry"
def letterReverse(string)
  word_array = string.split(" ")
  word_array.each_with_index do |word, index|
    word_array[index] = word.split("").reverse.join("")
  end
return word_array.join(" ")
end

binding.pry
