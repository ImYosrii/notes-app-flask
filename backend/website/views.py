# This is where routes are defined

from flask import Blueprint, jsonify, request
from .models import User, Note
from . import db


views = Blueprint('views', __name__)

@views.route('/', methods=["GET", "POST", "DELETE"])
def hello():
    if request.method == "POST":
        data = request.get_json()
        user = data.get('user')
        userId = User.query.filter_by(email=user).first().id
        note = data.get('note')

        newNote = Note(data=note, user_id=userId)
        
        db.session.add(newNote)
        db.session.commit()
        noteId = newNote.id
        return jsonify(message="Note created successfully", noteId=noteId), 201

    elif request.method == "GET":
        user = request.args.get('user')
        userId = User.query.filter_by(email=user).first().id
        print(user, userId)
        notes = Note.query.filter_by(user_id=userId).all()
        notesArray = [[note.id, note.data] for note in notes]
        return jsonify(notes=notesArray), 200

    elif request.method == "DELETE":
        noteId = request.args.get('noteId')

        note = Note.query.get(noteId)
        if note:
            db.session.delete(note)
            db.session.commit()
            return jsonify(message="Note deleted successfully"), 200
        else:
            return jsonify(message="Note not found"), 404