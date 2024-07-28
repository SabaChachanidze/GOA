# Getting four numbers from the user
numbers = []
for i in range(1, 5):
    num = float(input(f"Enter number {i}: "))
    numbers.append(num)

# Perform arithmetic operations
sum_result = sum(numbers)
difference = numbers[0] - numbers[1] - numbers[2] - numbers[3]
product = numbers[0] * numbers[1] * numbers[2] * numbers[3]
floordiv_result = numbers[0] // numbers[1] // numbers[2] // numbers[3]
power_result = numbers[0] ** numbers[1] ** numbers[2] ** numbers[3]

# Print the results
print(f"Sum: {sum_result}")
print(f"Difference: {difference}")
print(f"Product: {product}")
print(f"Floor Division: {floordiv_result}")
print(f"Exponentiation: {power_result}")
