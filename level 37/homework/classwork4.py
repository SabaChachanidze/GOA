# 1. შექმენით temperatures სია
temperatures = [72, 68, 75, 70, 78, 74, 71]

# 2. დაასახელეთ ყველაზე მაღალი ტემპერატურა
highest_temp = max(temperatures)
print("Highest temperature:", highest_temp)

# 3. დაასახელეთ ყველაზე დაბალი ტემპერატურა
lowest_temp = min(temperatures)
print("Lowest temperature:", lowest_temp)

# 4. გამოთვალეთ საშუალო ტემპერატურა
average_temp = sum(temperatures) / len(temperatures)
print("Average temperature:", average_temp)

# 5. ტემპერატურების სია, რომლებიც 70-ზე მეტია
above_70 = [temp for temp in temperatures if temp > 70]
print("Temperatures above 70:", above_70)
