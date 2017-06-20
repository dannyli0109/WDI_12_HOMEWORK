require "pry"
# round1
words = ["hello", "what", "is", "up", "dude"]

def lengths(array)
  return array.map { |element| element.length }
end

print lengths words
binding.pry
