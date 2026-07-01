from flask import Blueprint, request, jsonify
from database import db
from models import Property

property_bp = Blueprint("property", __name__)


@property_bp.route("/add_property", methods=["POST"])
def add_property():

    data = request.get_json()

    title = data.get("title")

    property_type = data.get("property_type")
    listing_type = data.get("listing_type")

    city = data.get("city")
    address = data.get("address")

    price = data.get("price")
    area = data.get("area")

    bedrooms = data.get("bedrooms")
    bathrooms = data.get("bathrooms")

    description = data.get("description")

    new_property = Property(
    title=title,
    property_type=property_type,
    listing_type=listing_type,

    city=city,
    address=address,

    price=price,
    area=area,

    bedrooms=bedrooms,
    bathrooms=bathrooms,

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

    "type": p.property_type if p.property_type else "Apartment",
    "listingType": "rent" if p.listing_type == "For Rent" else "sale",

    "city": p.city,
    "address": p.address,

    "price": p.price,
    "priceLabel": f"₹{int(p.price):,}",

    "beds": p.bedrooms if p.bedrooms else 0,
    "baths": p.bathrooms if p.bathrooms else 0,
    "area": p.area if p.area else 0,

    "description": p.description,

    "images": [
        p.image if p.image else "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1000&q=80&auto=format&fit=crop"
    ]
})
    return jsonify(property_list), 200