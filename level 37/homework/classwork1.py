# 1. შექმენით fruits სია
fruits = ["apple", "banana", "cherry", "date", "elderberry"]

# 2. დაბეჭდეთ სია
print("Fruits list:", fruits)

# 3. პირველ და ბოლო ელემენტზე წვდომა და მათი დაბეჭდვა
print("First fruit:", fruits[0])
print("Last fruit:", fruits[-1])

# 4. სიას ახალი ხილი "fig" დაამატეთ
fruits.append("fig")
print("After adding 'fig':", fruits)

# 5. წაშალეთ "banana" სიიდან
fruits.remove("banana")
print("After removing 'banana':", fruits)

# 6. შეცვალეთ მეორე ელემენტი "blueberry"-ით
fruits[1] = "blueberry"
print("After changing second fruit:", fruits)

# 7. დაბეჭდეთ სიის სიგრძე
print("Length of the list:", len(fruits))
