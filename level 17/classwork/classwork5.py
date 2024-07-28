# მომხმარებელს სთხოვეთ შეიყვანოს ასაკი
while True:
    try:
        age = int(input("შეიყვანეთ თქვენი ასაკი: "))
        if age > 0:
            break
        else:
            print("ასაკი უნდა იყოს დადებითი რიცხვი.")
    except ValueError:
        print("გთხოვთ, შეიყვანოთ სწორი რიცხვი.")

# მომხმარებელს სთხოვეთ შეიყვანოს შესყიდვის მთლიანი თანხა
while True:
    try:
        total_purchase = float(input("შეიყვანეთ შესყიდვის მთლიანი თანხა ($): "))
        if total_purchase > 0:
            break
        else:
            print("შესყიდვის თანხა უნდა იყოს დადებითი რიცხვი.")
    except ValueError:
        print("გთხოვთ, შეიყვანოთ სწორი რიცხვი.")

# ფასდაკლების შემოწმება
if age > 60 and total_purchase >= 100:
    discount_message = "თქვენ გაქვთ უფლება მიიღოთ მეტი ფასდაკლება."
elif age > 60:
    discount_message = "თქვენ გაქვთ უფლება მიიღოთ ფასდაკლება ასაკის გამო."
elif total_purchase >= 100:
    discount_message = "თქვენ გაქვთ უფლება მიიღოთ ფასდაკლება შესყიდვის თანხის გამო."
else:
    discount_message = "თქვენ არ გაქვთ ფასდაკლების უფლება."

# შედეგების ჩვენება
print(discount_message)
