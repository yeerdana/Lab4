def squares(n):
    for i in range(1, n+1):
        yield i ** 2

for val in squares(5):
    print(val)