

def is_prime(number):
    if number<2 :
        return False

    for x in range(2,number): #excluding number
        if number % x ==0 :
            return False
    
    return True


def find_primes(min,max):

    for number in range(min,max):
        if is_prime(number):
            yield number

    