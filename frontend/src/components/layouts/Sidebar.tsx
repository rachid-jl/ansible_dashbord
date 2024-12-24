import { NavLink } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Settings, Users, FileCode, Key, Shield } from 'lucide-react';

export function Sidebar() {
  const { user } = useAuth();
  const isAdmin = user?.role === 'admin';

  return (
    <aside className="w-64 min-h-screen bg-gray-800 text-white">
      <nav className="mt-8">
        {isAdmin && (
          <>
            <NavLink
              to="/inventory"
              className={({ isActive }) =>
                `flex items-center px-6 py-3 text-sm ${
                  isActive ? 'bg-gray-700' : 'hover:bg-gray-700'
                }`
              }
            >
              <Users className="w-5 h-5 mr-3" />
              Inventory
            </NavLink>
            <NavLink
              to="/playbooks"
              className={({ isActive }) =>
                `flex items-center px-6 py-3 text-sm ${
                  isActive ? 'bg-gray-700' : 'hover:bg-gray-700'
                }`
              }
            >
              <FileCode className="w-5 h-5 mr-3" />
              Playbooks
            </NavLink>
            <NavLink
              to="/playbook-permissions"
              className={({ isActive }) =>
                `flex items-center px-6 py-3 text-sm ${
                  isActive ? 'bg-gray-700' : 'hover:bg-gray-700'
                }`
              }
            >
              <Shield className="w-5 h-5 mr-3" />
              Permissions
            </NavLink>
          </>
        )}
        <NavLink
          to="/credentials"
          className={({ isActive }) =>
            `flex items-center px-6 py-3 text-sm ${
              isActive ? 'bg-gray-700' : 'hover:bg-gray-700'
            }`
          }
        >
          <Key className="w-5 h-5 mr-3" />
          Credentials
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center px-6 py-3 text-sm ${
              isActive ? 'bg-gray-700' : 'hover:bg-gray-700'
            }`
          }
        >
          <Settings className="w-5 h-5 mr-3" />
          Settings
        </NavLink>
      </nav>
    </aside>
  );
}