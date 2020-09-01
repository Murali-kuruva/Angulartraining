import flask


app=flask.Flask(__name__) # __name__ represent name of current module

@app.route('/')
def say_hello():
    return 'hello world from python Flask'


app.run(port=9000, debug=True)  # this will start a server on port 9000
print('server has started')