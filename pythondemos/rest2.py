from flask import Flask,render_template,request,redirect,jsonify
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

    def values(self):
        return dict(id=self.id, content=self.content, date_created=str(self.date_created))




    @staticmethod
    def parse(values):
        return Todo(
            
            content=values.get('content',None),
            
        )


def task_list(tasks):
    return [task.values() for task in tasks]



class TasksRoute(Resource):
    def get(self):
        tasks=Todo.query.order_by(Todo.date_created).all()
        
        return task_list(tasks)

    def post(self):
        task=Todo.parse(request.get_json())      
        try:
            db.session.add(task)
            db.session.commit()
            print(f'added {task} to task')
            return jsonify(task.values() ) 
        except Exception as e:
            return f'Error Adding {task} to db {e}'



api.add_resource(TasksRoute, '/api/tasks')

        



if __name__=='__main__':
    app.run(debug=True)

