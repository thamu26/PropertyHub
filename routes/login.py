from flask import Blueprint, request, jsonify
from models import User
from werkzeug.security import check_password_hash

login = Blueprint("login", __name__)

@login.route("/login", methods=["POST"])
def login_user():

    data = request.get_json()

    email = data.get("email")
    password = data.get("password")

    user = User.query.filter_by(email=email).first()

    if not user:
        return jsonify({
            "message": "User not found"
        }), 404

    if not check_password_hash(user.password, password):
        return jsonify({
            "message": "Wrong password"
        }), 401

    return jsonify({
        "message": "Login Successful",
        "user": {
            "id": user.id,
            "name": user.full_name,
            "email": user.email
        }
    }), 200