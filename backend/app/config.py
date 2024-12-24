"""Application configuration."""
import os
from datetime import timedelta

class Config:
    """Base configuration."""
    SECRET_KEY = os.getenv('SECRET_KEY', 'dev-secret-key')
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL', 'sqlite:///app.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JWT_SECRET_KEY = os.getenv('JWT_SECRET_KEY', 'dev-jwt-secret')
    JWT_ACCESS_TOKEN_EXPIRES = timedelta(hours=1)
    ANSIBLE_PLAYBOOK_DIR = os.getenv('ANSIBLE_PLAYBOOK_DIR', 'playbooks')
    ANSIBLE_INVENTORY_FILE = os.getenv('ANSIBLE_INVENTORY_FILE', 'inventory/hosts.yml')