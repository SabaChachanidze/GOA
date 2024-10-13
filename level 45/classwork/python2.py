def sum(x):
    res = 0
    for i in range(x):  # range(4) gives [0, 1, 2, 3]
        res += i        # Adds 0, 1, 2, 3 to res
    return res

print(sum(4))
