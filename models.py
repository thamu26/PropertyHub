from database import db


class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    phone = db.Column(db.String(20), nullable=True)

    def __repr__(self):
        return f"<User {self.email}>"


class Property(db.Model):
    __tablename__ = "properties"

    id = db.Column(db.Integer, primary_key=True)

    title = db.Column(db.String(200), nullable=False)
    property_type = db.Column(db.String(100))
    listing_type = db.Column(db.String(50))

    city = db.Column(db.String(100), nullable=False)
    address = db.Column(db.String(255), nullable=False)

    price = db.Column(db.Float, nullable=False)
    area = db.Column(db.Float)

    bedrooms = db.Column(db.Integer)
    bathrooms = db.Column(db.Integer)

    description = db.Column(db.Text, nullable=False)

    amenities = db.Column(db.Text)

    image = db.Column(db.String(255))

    status = db.Column(db.String(50), default="Pending")

    owner_id = db.Column(db.Integer, db.ForeignKey("users.id"))

    created_at = db.Column(db.DateTime, server_default=db.func.now())

    def __repr__(self):
        return f"<Property {self.title}>"