def average_of_list(num_list):
    if not num_list:
        return 0
    total = sum(num_list)
    count = len(num_list)
    return total / count