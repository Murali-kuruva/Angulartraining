from flask import Flask,render_template,request,redirect
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import sqlalchemy.dialects.sqlite

app=Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///test.db'
db = SQLAlchemy(app)

class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content=db.Column(db.String(200),nullable=False)
    completed=db.Column(db.Integer, default=1)
    date_created=db.Column(db.DateTime, default=datetime.now )

    def __repr__(self):
        return f'Task #{self.id}'


@app.route('/',methods=['GET'])
def home():
    tasks=Todo.query.order_by(Todo.date_created).all()
    for task in tasks:
        print(task.content) 
    return render_template('index.html',tasks=tasks)

@app.route('/',methods=['POST'])
def home_on_submit():
    content=request.form['content']
    todo=Todo(content=content)
    try:
        
        db.session.add(todo)
        db.session.commit()
        print(f'added {todo} to task')
        return redirect('/')
    except :
        return f'Error Adding {content} to db'

@app.route('/delete/<int:id>')
def delete_task(id):
    task=Todo.query.get_or_404(id)
    try:
        db.session.delete(task)
        db.session.commit()
        return redirect('/')
    except:
        return f'failed to delete task {id}'


@app.route('/about')
def about():
    return render_template('about.html')


if __name__=='__main__':
    app.run(debug=True)

