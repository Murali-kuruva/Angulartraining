from flask import Flask,render_template,request,redirect
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import sqlalchemy.dialects.sqlite
from flask_restful import Resource,Api

app=Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///test.db'
db = SQLAlchemy(app)
api=Api(app)

class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content=db.Column(db.String(200),nullable=False)
    completed=db.Column(db.Integer, default=1)
    date_created=db.Column(db.DateTime, default=datetime.now )

    def __repr__(self):
        return f'Task #{self.id}'

tasks=[
            {'id':1,'content':'task1'},
            {'id':2,'content':'task2'},
            {'id':3,'content':'task3'}
         ]

class TasksRoute(Resource):
    def get(self):
        return tasks

    def post(self):
        task=request.get_json()['content']
        print(type(tasks))
        tasks.append({'id':len(tasks)+1,'content':task})
        return tasks

api.add_resource(TasksRoute, '/api/tasks')

        



if __name__=='__main__':
    app.run(debug=True)

