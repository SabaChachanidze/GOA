def find_mean(numbers):
    if len(numbers) == 0:
        return 0
    return sum(numbers) / len(numbers)


print(find_mean([1, 2, 3, 4, 5]))  
