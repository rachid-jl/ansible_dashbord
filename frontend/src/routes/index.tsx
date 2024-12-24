import { Routes, Route, Navigate } from 'react-router-dom';
import { DashboardLayout } from '@/components/layouts';
import { LoginPage } from '@/pages/auth';
import {
  InventoryPage,
  PlaybooksPage,
  CredentialsPage,
  SettingsPage,
  PlaybookPermissionsPage,
} from '@/pages';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Navigate to="/inventory" replace />} />
        <Route path="inventory" element={<InventoryPage />} />
        <Route path="playbooks" element={<PlaybooksPage />} />
        <Route path="playbook-permissions" element={<PlaybookPermissionsPage />} />
        <Route path="credentials" element={<CredentialsPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
}