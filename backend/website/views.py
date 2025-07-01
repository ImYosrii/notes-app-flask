# This is where routes are defined

from flask import Blueprint, jsonify

views = Blueprint('views', __name__)

@views.route('/')
def hello():
    return jsonify(message="Hello from Flask!")
