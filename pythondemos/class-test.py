

class Author:
    #constructor or initializer

    '''
    self is a conventional word not a key word to represent the current object
    it is similar to 'this' keyword of javascript.
    important difference

    1. you must pass self as first parameter to class functions explicitly
        * this is passed automatically. you don't pass it
    2. self is a conventional word and you can use any other word here to represent the object
        * like : object, me, or this
        * it is a common notion and you should follow it
    '''

    def __init__(self, id, name, biography,photograph, email):
        self.id=id
        self.name=name
        self.biography=biography
        self.photograph=photograph
        self.email=email
        self.books=[]

    # note in this example I am using 'author' instead of using self. 
    # this is allowed but not recommended
    def add_book(author,book):
        author.books.append(book)


vivek=Author('vivek', 'Vivek Dutta Mishra', 'The author of The Accursed God', 'vivek.jpg', 'vivek@conceptarchitect.in')

vivek.add_book('The Accursed God')
vivek.add_book('My short stories')


print(vivek.biography)
print(vivek.books)
