def count_vowels(text):
    vowels = "AEIOUaeiou"  
    count = 0
    for char in text:
        if char in vowels:
            count += 1
    return count
 
text = input("შეიყვანე ტექსტი: ")
print(f"ასობგერების რაოდენობა ტექსტში არის: {count_vowels(text)}")
