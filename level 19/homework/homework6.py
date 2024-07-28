import random

target_number = random.randint(1, 100)  # აირჩიეთ რიცხვი 1-დან 100-ის ფარგლებში

while True:
    guess = int(input("შეიყვანეთ რიცხვი: "))
    if guess == target_number:
        print("გილოცავთ! სწორად გამოიცანით.")
        break
    else:
        print("არასწორი, სცადეთ ისევ.")
