# Ansible Web Dashboard

A modern web-based dashboard for managing Ansible inventories, playbooks, and credentials with role-based access control.

## Project Structure

```
ansible-dashboard/
├── frontend/          # React frontend application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/        # Page components
│   │   ├── services/     # API service layer
│   │   ├── store/        # State management
│   │   └── types/        # TypeScript type definitions
│   └── public/
└── backend/           # Python Flask backend
    ├── app/
    │   ├── routes/       # API endpoints
    │   ├── models/       # Database models
    │   └── services/     # Business logic
    ├── playbooks/        # Stored Ansible playbooks
    └── inventory/        # Inventory files
```

## Prerequisites

- Python 3.8+
- Node.js 16+
- Ansible

## Quick Start

1. Clone the repository and navigate to the project directory:
```bash
git clone <repository-url>
cd ansible-dashboard
```

2. Run the installation script:
```bash
chmod +x install.sh
./install.sh
```

3. Start the backend server:
```bash
cd backend
python wsgi.py
```

4. In a new terminal, start the frontend development server:
```bash
cd frontend
npm run dev
```

5. Access the application at http://localhost:5173

## Default Credentials

- Admin User:
  - Username: admin
  - Password: password

- Regular User:
  - Username: user
  - Password: password

## Development

### Frontend Development

The frontend is built with:
- React 18 with TypeScript
- Tailwind CSS for styling
- React Router for navigation
- Zustand for state management
- Axios for API communication

To start the frontend development server:
```bash
cd frontend
npm run dev
```

### Backend Development

The backend uses:
- Python Flask
- SQLite database
- Flask-JWT-Extended for authentication
- Flask-SQLAlchemy for database ORM
- Ansible Runner for playbook execution

To start the backend server:
```bash
cd backend
python wsgi.py
```

## License

MIT License