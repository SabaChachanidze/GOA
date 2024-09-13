# Initial list
nums = [2, 4, 8, 9, 5]

# Step 1: Insert 3 at index 1
nums.insert(1, 3)

# Step 2: Remove the number 9
nums.remove(9)

# Step 3: Insert the count of 8 at index 0
nums.insert(0, nums.count(8))

# Step 4: Print the value at index 3
print(nums[3])
