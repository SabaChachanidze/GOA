# 1. Create a list named 'fruits' that contains the specified items
fruits = ["apple", "banana", "cherry", "date", "elderberry"]

# 2. Print the entire list
print("The entire list:", fruits)

# 3. Access and print the first and last items in the list
print("First item:", fruits[0])
print("Last item:", fruits[-1])

# 4. Add a new fruit "fig" to the list
fruits.append("fig")
print("After adding 'fig':", fruits)

# 5. Remove "banana" from the list
fruits.remove("banana")
print("After removing 'banana':", fruits)

# 6. Change the value of the second item to "blueberry"
fruits[1] = "blueberry"
print("After changing the second item to 'blueberry':", fruits)

# 7. Print the length of the list
print("Length of the list:", len(fruits))
