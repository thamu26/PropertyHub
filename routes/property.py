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

    "type": p.property_type or "Apartment",
    "listingType": (p.listing_type or "sale").lower(),

    "city": p.city,
    "address": p.address,

    "price": p.price,
    "priceLabel": f"₹{p.price:,.0f}",

    "beds": p.bedrooms or 0,
    "baths": p.bathrooms or 0,
    "area": p.area or 0,

    "description": p.description,

    "images": [
        p.image if p.image else "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1000&q=80&auto=format&fit=crop"
    ]
})

    return jsonify(property_list), 200