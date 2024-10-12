def check_number_sign(number):
    if number > 0:
        return "რიცხვი დადებითია"
    elif number < 0:
        return "რიცხვი უარყოფითია"
    else:
        return "ნულია"


print(check_number_sign(5))  
print(check_number_sign(-3))
print(check_number_sign(0))  