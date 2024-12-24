"""Custom decorators for the application."""
from functools import wraps
from flask_jwt_extended import get_jwt_identity, verify_jwt_in_request
from flask import jsonify
from ..models.user import User

def admin_required():
    """Decorator to require admin role."""
    def wrapper(fn):
        @wraps(fn)
        def decorator(*args, **kwargs):
            verify_jwt_in_request()
            user = User.query.get(get_jwt_identity())
            if not user or user.role != 'admin':
                return jsonify(message="Admins only!"), 403
            return fn(*args, **kwargs)
        return decorator
    return wrapper