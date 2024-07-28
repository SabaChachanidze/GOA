# Taking inputs from the user
minutes = int(input("How many minutes have you been running? "))
steps = int(input("How many steps have you taken? "))

# Checking if you've taken 1000 steps in 10 minutes
result = (minutes <= 10) and (steps >= 1000)

# Displaying the result
print(result)
