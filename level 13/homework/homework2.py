# Getting ages of family members
ages = []
num_members = int(input("Enter the number of family members: "))
for i in range(num_members):
    age = int(input(f"Enter the age of family member {i + 1}: "))
    ages.append(age)

# Calculate ages 20 years later
future_ages = [age + 20 for age in ages]

# Print the results
for i, future_age in enumerate(future_ages, start=1):
    print(f"Family member {i} will be {future_age} years old in 20 years.")
