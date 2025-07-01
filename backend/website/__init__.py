from flask import Flask
from flask_cors import CORS  # Allows React to make requests
from .views import views  # Import views blueprint
from .auth import auth  # Import auth blueprint

def create_app():
    app = Flask(__name__)
    app.config["SECRET_KEY"] = "your_secret_key_here"  # Set a secret key for session management
    CORS(app)  # Allow all origins (adjust for production)

    app.register_blueprint(views, url_prefix='/')  # Register views blueprint
    app.register_blueprint(auth, url_prefix='/')  # Register auth blueprint

    return app
