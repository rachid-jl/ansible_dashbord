from datetime import datetime
from .. import db

class Permission(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    playbook_id = db.Column(db.Integer, db.ForeignKey('playbook.id'), nullable=False)
    can_execute = db.Column(db.Boolean, default=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    user = db.relationship('User', backref=db.backref('permissions', lazy=True))
    playbook = db.relationship('Playbook', backref=db.backref('permissions', lazy=True))

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'playbookId': self.playbook_id,
            'canExecute': self.can_execute,
            'createdAt': self.created_at.isoformat(),
            'updatedAt': self.updated_at.isoformat()
        }