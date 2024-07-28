# მომხმარებელს სთხოვეთ პირველი რიცხვის შეყვანა
while True:
    try:
        first_number = float(input("შეიყვანეთ პირველი რიცხვი: "))
        break
    except ValueError:
        print("გთხოვთ, შეიყვანოთ სწორი რიცხვი.")

# მომხმარებელს სთხოვეთ მეორე რიცხვის შეყვანა
while True:
    try:
        second_number = float(input("შეიყვანეთ მეორე რიცხვი: "))
        break
    except ValueError:
        print("გთხოვთ, შეიყვანოთ სწორი რიცხვი.")

# პირობების შემოწმება
if first_number < 10 and second_number > 100:
    print(True)
else:
    print(False)
