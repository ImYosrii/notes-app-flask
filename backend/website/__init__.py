from flask import Flask
from flask_cors import CORS  
from flask_sqlalchemy import SQLAlchemy
from os import path


# Initialize SQLAlchemy
db = SQLAlchemy()  
DB_NAME = "database.db"  

def create_app():
    app = Flask(__name__)
    app.config["SECRET_KEY"] = "your_secret_key_here"
    app.config["SQLALCHEMY_DATABASE_URI"] = f"sqlite:///{DB_NAME}" # database location
    db.init_app(app)  # Initialize SQLAlchemy with the app

    CORS(app)

    from .views import views  
    from .auth import auth  

    app.register_blueprint(views, url_prefix='/')  # Register views blueprint
    app.register_blueprint(auth, url_prefix='/')  # Register auth blueprint

    # Creates the database if it doesn't exist
    with app.app_context():
        db.create_all()

    return app
