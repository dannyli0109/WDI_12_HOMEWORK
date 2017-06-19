require "pry"

# 1
days_of_the_week = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

# 2
days_of_the_week.unshift days_of_the_week.pop

# 3
days_of_the_week = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
days_of_the_week = days_of_the_week.each_slice(5).to_a

# 4
days_of_the_week.pop

# 5
days_of_the_week[0] = days_of_the_week[0].sort

binding.pry
