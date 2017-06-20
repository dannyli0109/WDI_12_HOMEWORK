require "pry"
def longest(string_array)
  length_array = string_array.map { |string| string.length}
  longest_index = 0
  length_array.each_with_index do |length, index|
    if length > string_array[longest_index].length
      longest_index = index
    end
  end
  return string_array[longest_index]
end
binding.pry
