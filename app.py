import os
from flask import Flask, render_template
from werkzeug.utils import secure_filename
from database import db
from models import User, Property
from routes.auth import auth
from routes.login import login

app = Flask(__name__)
UPLOAD_FOLDER = "static/uploads"
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
app.config["SECRET_KEY"] = "propertyhub_secret_key"
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///propertyhub.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
from routes.property import property_bp

db.init_app(app)
app.register_blueprint(auth)
app.register_blueprint(login)
app.register_blueprint(property_bp)

@app.route("/")
def home():


    return render_template("index.html")

with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run(debug=True)