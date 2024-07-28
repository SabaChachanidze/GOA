# Storing personal information
name = input("Enter your name: ")
surname = input("Enter your surname: ")
age = int(input("Enter your age: "))
country = input("Enter your country: ")
city = input("Enter your city: ")
favorite_color = input("Enter your favorite color: ")
favorite_car = input("Enter your favorite car: ")
favorite_food = input("Enter your favorite food: ")
favorite_sport = input("Enter your favorite sport: ")

# Creating a sentence
sentence = (f"My name is {name} {surname}, I am {age} years old. I live in {city}, {country}. "
            f"My favorite color is {favorite_color}, I love driving {favorite_car}, eating {favorite_food}, "
            f"and my favorite sport is {favorite_sport}.")

# Print the sentence
print(sentence)
