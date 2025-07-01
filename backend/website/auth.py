from flask import Blueprint, jsonify

auth = Blueprint('auth', __name__)

@auth.route("/login")
def login():
    return jsonify(message="Login endpoint")

@auth.route("/logout")
def logout():
    return jsonify(message="Logout endpoint")

@auth.route("/signup")
def signup():
    return jsonify(message="Signup endpoint")