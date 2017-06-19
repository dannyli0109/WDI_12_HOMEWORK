
require "pry"
puts("This is a calculator\nPlease enter your selection:\n1: add\n2: substract\n3: multiplication\n4: divide\n5: exponent\n|\n--->enter 0.5 as the second number if you want square root")
selection = gets.to_i
operations = [:+, :-, :*, :/, :**]
operations_string = ["+", "-", "*", "/", "^"]
while (selection < 1 || selection > 5)
  puts("Invalid input, please try again!")
  selection = gets.to_i
end

puts("Please enter a number")
input = gets.chomp
numbers = []
while (input != "n")
  numbers.push(input.to_f)
  puts("Please enter your next number, enter n to output result")
  input = gets.chomp
end

result = numbers[0];
i = 0
while i < numbers.length
  if i + 1 >= numbers.length
    break
  end
  result = result.send(operations[selection - 1], numbers[i + 1])
  i += 1
end
return_string = ""

while numbers.length > 0
  return_string += "#{numbers.shift} "
  if numbers.length > 0
    return_string += "#{operations_string[selection - 1]} "
  end
end
puts "#{return_string} equals #{result}"
binding.pry
