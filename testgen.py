import random

random.seed(22)
n = 1000000
for i in range(n):
    print(random.randint(0, 3) + 1, random.randint(0, 1000))
print(0)