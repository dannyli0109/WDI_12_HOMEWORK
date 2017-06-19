require "pry"
puts "enter a list:"
list = gets.chomp
array = list.split ","

puts "enter the number you want to slice"
number = gets.chomp.to_i
while array.length < number
  puts "list too short, please enter another number"
  number = gets.chomp.to_i
end

output = []
# randomly pick an element in an array and push to sub array
while array.length >= number
  i = 0
  sub_array = []
  while i < number
    random_index = Random.rand 0...array.length
    sub_array.push array[random_index]
    array.delete_at random_index
    i+=1
  end
  output.push sub_array
end

# randomly assign the rest to the last array
while array.length > 0
  random_index = Random.rand 0...array.length
  output[output.length - 1].push array[random_index]
  array.delete_at random_index
end

output.each do |element|
  print "#{element} "
end

binding.pry
