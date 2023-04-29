from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)

# database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///calendar.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# database model for calendar events
class Event(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    start = db.Column(db.DateTime, nullable=False)
    end = db.Column(db.DateTime, nullable=False)

    def __repr__(self):
        return f'<Event {self.id} {self.title} {self.start} {self.end}>'

# endpoint to retrieve all events
@app.route('/api/events')
def get_events():
    events = Event.query.all()
    return jsonify([{
        'id': e.id,
        'title': e.title,
        'start': e.start.isoformat(),
        'end': e.end.isoformat()
    } for e in events])

# endpoint to add a new event
@app.route('/api/events', methods=['POST'])
def add_event():
    data = request.json
    event = Event(title=data['title'], start=data['start'], end=data['end'])
    db.session.add(event)
    db.session.commit()
    return jsonify({
        'id': event.id,
        'title': event.title,
        'start': event.start.isoformat(),
        'end': event.end.isoformat()
    })

if __name__ == '__main__':
    app.run(debug=True)
