def separate_even_odd(numbers):
    even_numbers = [num for num in numbers if num % 2 == 0]
    odd_numbers = [num for num in numbers if num % 2 != 0]
    return even_numbers, odd_numbers


even, odd = separate_even_odd([1, 2, 3, 4, 5, 6])
print("ლუწი:", even) 
print("კენტი:", odd)  