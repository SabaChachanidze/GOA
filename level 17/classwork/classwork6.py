# მომხმარებელს სთხოვეთ შეიყვანოს GPA
while True:
    try:
        gpa = float(input("შეიყვანეთ თქვენი GPA: "))
        if gpa >= 0:
            break
        else:
            print("GPA უნდა იყოს დადებითი რიცხვი.")
    except ValueError:
        print("გთხოვთ, შეიყვანოთ სწორი რიცხვი.")

# მომხმარებელს სთხოვეთ შეიყვანოს ოჯახის შემოსავალი
while True:
    try:
        family_income = float(input("შეიყვანეთ თქვენი ოჯახის შემოსავალი ($): "))
        if family_income >= 0:
            break
        else:
            print("ოჯახის შემოსავალი უნდა იყოს დადებითი რიცხვი.")
    except ValueError:
        print("გთხოვთ, შეიყვანოთ სწორი რიცხვი.")

# სტიპენდიის შემოწმება
if gpa >= 3.5:
    scholarship_message = "თქვენ გაქვთ უფლება სტიპენდიაზე."
elif gpa >= 3.0 and family_income < 50000:
    scholarship_message = "თქვენ გაქვთ უფლება უმაღლეს სტიპენდიაზე."
elif gpa >= 3.0:
    scholarship_message = "თქვენ გაქვთ უფლება სტიპენდიაზე."
else:
    scholarship_message = "თქვენ არ გაქვთ სტიპენდიის მიღების უფლება."

# შედეგების ჩვენება
print(scholarship_message)
