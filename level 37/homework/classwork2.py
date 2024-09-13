# 1. შექმენით numbers სია
numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90]

# 2. append() ფუნქციით დაამატეთ 100
numbers.append(100)
print("After appending 100:", numbers)

# 3. insert() ფუნქციით დაამატეთ 5 სიის დასაწყისში
numbers.insert(0, 5)
print("After inserting 5 at the beginning:", numbers)

# 4. remove() ფუნქციით წაშალეთ 30
numbers.remove(30)
print("After removing 30:", numbers)

# 5. sort() ფუნქციით დაალაგეთ სია ზრდადობის მიხედვით
numbers.sort()
print("After sorting:", numbers)

# 6. reverse() ფუნქციით შებრუნეთ სია
numbers.reverse()
print("After reversing:", numbers)

# 7. index() ფუნქციით იპოვეთ 50-ის ინდექსი
index_of_50 = numbers.index(50)
print("Index of 50:", index_of_50)

# 8. count() ფუნქციით დაითვალეთ 20-იანების რაოდენობა
count_of_20 = numbers.count(20)
print("Count of 20:", count_of_20)
