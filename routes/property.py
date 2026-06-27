from flask import Blueprint, request, jsonify
from database import db
from models import Property

property_bp = Blueprint("property", __name__)


@property_bp.route("/add_property", methods=["POST"])
def add_property():

    data = request.get_json()

    title = data.get("title")
    city = data.get("city")
    address = data.get("address")
    price = data.get("price")
    description = data.get("description")

    new_property = Property(
        title=title,
        city=city,
        address=address,
        price=price,
        description=description
    )

    db.session.add(new_property)
    db.session.commit()

    

    return jsonify({
        "message": "Property added successfully"
    }), 201

@property_bp.route("/properties", methods=["GET"])
def get_properties():

    properties = Property.query.all()

    property_list = []

    for p in properties:
        property_list.append({
            "id": p.id,
            "title": p.title,
            "city": p.city,
            "address": p.address,
            "price": p.price,
            "description": p.description,
            "image": p.image
        })

    return jsonify(property_list), 200