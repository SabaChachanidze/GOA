# მომხმარებელს სთხოვეთ შეიყვანოს ნივთების რაოდენობა
while True:
    try:
        item_count = int(input("შეიყვანეთ ნივთების რაოდენობა, რომლის შეძენაც გსურთ: "))
        if item_count > 0:
            break
        else:
            print("ნივთების რაოდენობა უნდა იყოს დადებითი რიცხვი.")
    except ValueError:
        print("გთხოვთ, შეიყვანოთ სწორი რიცხვი.")

total_cost = 0.0

# თითოეული ნივთისთვის სთხოვეთ მომხმარებელს ფასი და დაამატეთ მთლიანი ღირებულება
for i in range(item_count):
    while True:
        try:
            item_price = float(input(f"შეიყვანეთ {i+1}-ე ნივთის ფასი: "))
            if item_price > 0:
                total_cost += item_price
                break
            else:
                print("ფასი უნდა იყოს დადებითი რიცხვი.")
        except ValueError:
            print("გთხოვთ, შეიყვანოთ სწორი რიცხვი.")

print(f"ყველა ნივთის მთლიანი ღირებულებაა: {total_cost:.2f}")
