def age_category(age):
    if age < 13:
        return "ბავშვი"
    elif 13 <= age <= 19:
        return "თინეიჯერი"
    elif 20 <= age <= 59:
        return "ზრდასრული"
    else:
        return "პენსიონერი"


print(age_category(10))  
print(age_category(15))  
print(age_category(25))  
print(age_category(65)) 
