# 1. ტოლობა (==)
a = 5
b = 5
print(a == b)  # True

# 2. უთანასწორობა (!=)
c = 10
d = 15
print(c != d)  # True

# 3. მეტი (>):
e = 20
f = 15
print(e > f)  # True

# 4. ნაკლები (<)
g = 10
h = 12
print(g < h)  # True

# 5. მეტი ან ტოლი (>=)
i = 7
j = 7
print(i >= j)  # True

# 6. ნაკლები ან ტოლი (<=)
k = 3
l = 9
print(k <= l)  # True

# 7. სტრიქონის შედარება
str1 = "apple"
str2 = "banana"
print(str1 < str2)  # True (a comes before b in alphabetical order)

# 8. რიცხვების სიის შედარება
list1 = [1, 2, 3]
list2 = [1, 2, 4]
print(list1 < list2)  # True (compares element-wise)

# 9. ლექსების შედარება
dict1 = {'a': 1, 'b': 2}
dict2 = {'a': 1, 'b': 3}
print(dict1 == dict2)  # False (values for key 'b' are different)

# 10. მიჯრით შედარება
m = 5
n = 10
o = 15
print(m < n < o)  # True (checks if m < n and n < o)
