weight = float(input("Enter weight in kilograms: "))
height = float(input("Enter height in meters: "))

bmi = weight / (height ** 2)

print("Your BMI is " + str(bmi))

if bmi < 18.5:
    print("Underweight.")
elif 18.5 <= bmi < 24.9:
    print("Normal weight.")
elif 25 <= bmi < 29.9:
    print("Overweight.")
else:
    print("Obesity.")