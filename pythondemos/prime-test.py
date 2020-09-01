import primes


numbers=[] # this a list

for prime in primes.find_primes(2,100):
    numbers.append(prime)


print(numbers)


print(type(numbers))


