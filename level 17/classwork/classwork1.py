# წინასწარ განსაზღვრული რიცხვი
preset_number = 500

# მომხმარებელს სთხოვეთ რიცხვის შეყვანა
user_number = int(input("შეიყვანეთ რიცხვი 1-დან 1000-მდე: "))

# შეამოწმეთ, სწორია თუ არა რიცხვი
if user_number == preset_number:
    print("სწორია!")
else:
    print("არასწორია!")