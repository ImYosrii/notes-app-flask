from flask import Flask
from flask_cors import CORS  # Allows React to make requests

from flask_sqlalchemy import SQLAlchemy
from os import path

db = SQLAlchemy()  # Initialize SQLAlchemy
DB_NAME = "database.db"  # Database name

def create_app():
    app = Flask(__name__)
    app.config["SECRET_KEY"] = "your_secret_key_here"  # Set a secret key for session management
    app.config["SQLALCHEMY_DATABASE_URI"] = f"sqlite:///{DB_NAME}"  # Set database URI
    db.init_app(app)  # Initialize SQLAlchemy with the app

    CORS(app)  # Allow all origins (adjust for production)
    from .views import views  # Import views blueprint
    from .auth import auth  # Import auth blueprint

    app.register_blueprint(views, url_prefix='/')  # Register views blueprint
    app.register_blueprint(auth, url_prefix='/')  # Register auth blueprint

    from .models import User, Note
    with app.app_context():
        db.create_all()

    return app
