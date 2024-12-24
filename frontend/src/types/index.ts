export interface User {
  id: string;
  username: string;
  role: 'admin' | 'user';
}

export interface Host {
  id: string;
  hostname: string;
  ipAddress: string;
  group: string;
  sshPort: number;
  description?: string;
}

export interface Playbook {
  id: string;
  name: string;
  description: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface CredentialUpdate {
  hosts: string[];
  username: string;
  password?: string;
  sshKey?: string;
}

export interface PlaybookPermission {
  id: string;
  userId: string;
  playbookId: string;
  canExecute: boolean;
  createdAt: string;
  updatedAt: string;
}