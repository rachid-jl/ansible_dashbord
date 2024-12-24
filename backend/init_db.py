from app import create_app, db
from app.models import User

def init_db():
    app = create_app()
    with app.app_context():
        # Create tables
        db.create_all()
        
        # Create admin user if it doesn't exist
        admin = User.query.filter_by(username='admin').first()
        if not admin:
            admin = User(username='admin', role='admin')
            admin.set_password('password')
            db.session.add(admin)
            
        # Create regular user if it doesn't exist
        user = User.query.filter_by(username='user').first()
        if not user:
            user = User(username='user', role='user')
            user.set_password('password')
            db.session.add(user)
            
        db.session.commit()
        
        print('Database initialized successfully!')
        print('Default users created:')
        print('Admin - username: admin, password: password')
        print('User - username: user, password: password')

if __name__ == '__main__':
    init_db()