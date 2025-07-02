from flask import Blueprint, jsonify, request
from .models import User, Note
from werkzeug.security import generate_password_hash, check_password_hash
from . import db

auth = Blueprint('auth', __name__)

@auth.route("/login", methods=['POST'])
def login():
    if request.method == "POST":
        data = request.get_json()
        email = data.get('email')
        password = data.get('password')

        user = User.query.filter_by(email=email).first()
        if not user or not check_password_hash(user.password, password):
            return jsonify(message="Invalid credentials"), 401
        else:
            return jsonify(message="Login successful"), 200

  

@auth.route("/logout")
def logout():
    return jsonify(message="Logout endpoint")

@auth.route("/signup", methods=['POST'])
def signup():
    if request.method == 'POST':
        data = request.get_json()
        email = data.get('email')
        password = data.get('password')

        existing_user = User.query.filter_by(email=email).first()
        if existing_user:
            return jsonify(message="User already exists"), 400  # Return error if user exists

        newUser = User(email=email, password=generate_password_hash(password, method='pbkdf2:sha256'))
        db.session.add(newUser)
        db.session.commit()
        return jsonify(message="User created successfully"), 201