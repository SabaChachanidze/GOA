# მომხმარებელს სთხოვეთ შეიყვანოს წონა კილოგრამებში
while True:
    try:
        weight = float(input("შეიყვანეთ წონა (კგ): "))
        if weight > 0:
            break
        else:
            print("წონა უნდა იყოს დადებითი რიცხვი.")
    except ValueError:
        print("გთხოვთ, შეიყვანოთ სწორი რიცხვი.")

# მომხმარებელს სთხოვეთ შეიყვანოს სიმაღლე მეტრებში
while True:
    try:
        height = float(input("შეიყვანეთ სიმაღლე (მ): "))
        if height > 0:
            break
        else:
            print("სიმაღლე უნდა იყოს დადებითი რიცხვი.")
    except ValueError:
        print("გთხოვთ, შეიყვანოთ სწორი რიცხვი.")

# BMI-ს გამოთვლა
bmi = weight / (height ** 2)

# ჯანმრთელობის შეტყობინება
if bmi < 18.5:
    message = "Underweight"
elif 18.5 <= bmi < 24.9:
    message = "Normal weight"
elif 25 <= bmi < 29.9:
    message = "Overweight"
else:
    message = "Obesity"

# შედეგების ჩვენება
print(f"თქვენი BMI არის: {bmi:.2f}")
print(f"ჯანმრთელობის მდგომარეობა: {message}")
