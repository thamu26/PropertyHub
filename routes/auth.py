from flask import Blueprint, request, jsonify
from models import User
from database import db
from werkzeug.security import generate_password_hash

auth = Blueprint("auth", __name__)

@auth.route("/register", methods=["POST"])
def register():

    data = request.get_json()

    full_name = data.get("full_name")
    email = data.get("email")
    password = data.get("password")
    phone = data.get("phone")

    # check if user already exists
    user_exists = User.query.filter_by(email=email).first()
    if user_exists:
        return jsonify({"message": "User already exists"}), 400

    # hash password
    hashed_password = generate_password_hash(password)

    # create user
    new_user = User(
        full_name=full_name,
        email=email,
        password=hashed_password,
        phone=phone
    )

    db.session.add(new_user)
    db.session.commit()

    return jsonify({
    "message": "User registered successfully",
    "user": {
        "id": new_user.id,
        "name": new_user.full_name,
        "email": new_user.email,
        "phone": new_user.phone,
        "role": "Buyer"
    }
}), 201