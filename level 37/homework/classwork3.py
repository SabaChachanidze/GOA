# 1. შექმენით numbers სია 1-დან 10-მდე რიცხვებით
numbers = list(range(1, 11))

# 2. სიიდან პირველი 5 ელემენტი
first_half = numbers[:5]
print("First half:", first_half)

# 3. სიიდან ბოლო 5 ელემენტი
second_half = numbers[5:]
print("Second half:", second_half)

# 4. სიის თითოეული ელემენტის კვადრატები
squares = [n**2 for n in numbers]
print("Squares of numbers:", squares)
