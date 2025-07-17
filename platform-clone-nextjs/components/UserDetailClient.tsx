"use client";
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const fakeUser = {
  id: '1',
  name: 'Иван Иванов',
  email: 'ivanov@example.com',
  roles: ['Admin', 'User'],
  permissions: ['View Dashboard', 'Edit Users'],
  history: [
    { date: '2024-07-01', action: 'Вход в систему' },
    { date: '2024-07-02', action: 'Изменение профиля' },
  ],
};

const TABS = [
  { key: 'profile', label: 'Профиль' },
  { key: 'roles', label: 'Роли' },
  { key: 'permissions', label: 'Права' },
  { key: 'history', label: 'История' },
];

export default function UserDetailClient({ id }: { id: string }) {
  const [tab, setTab] = useState('profile');
  // В реальном проекте данные пользователя подгружаются по id
  return (
    <main style={{ padding: 32 }}>
      <h1>Детали пользователя</h1>
      <div style={{ display: 'flex', gap: 12, margin: '24px 0' }}>
        {TABS.map(t => (
          <Button key={t.key} variant={tab === t.key ? 'primary' : 'secondary'} size="sm" onClick={() => setTab(t.key)}>
            {t.label}
          </Button>
        ))}
      </div>
      <Card style={{ padding: 24, minHeight: 200 }}>
        {tab === 'profile' && (
          <div>
            <h2 style={{ marginBottom: 16 }}>Профиль</h2>
            <div><b>ID:</b> {id}</div>
            <div><b>Имя:</b> {fakeUser.name}</div>
            <div><b>Email:</b> {fakeUser.email}</div>
          </div>
        )}
        {tab === 'roles' && (
          <div>
            <h2 style={{ marginBottom: 16 }}>Роли</h2>
            <ul>
              {fakeUser.roles.map(r => <li key={r}>{r}</li>)}
            </ul>
          </div>
        )}
        {tab === 'permissions' && (
          <div>
            <h2 style={{ marginBottom: 16 }}>Права</h2>
            <ul>
              {fakeUser.permissions.map(p => <li key={p}>{p}</li>)}
            </ul>
          </div>
        )}
        {tab === 'history' && (
          <div>
            <h2 style={{ marginBottom: 16 }}>История</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#f5f5f5' }}>
                  <th style={{ padding: 8, border: '1px solid #eee' }}>Дата</th>
                  <th style={{ padding: 8, border: '1px solid #eee' }}>Действие</th>
                </tr>
              </thead>
              <tbody>
                {fakeUser.history.map((h, i) => (
                  <tr key={i}>
                    <td style={{ padding: 8, border: '1px solid #eee' }}>{h.date}</td>
                    <td style={{ padding: 8, border: '1px solid #eee' }}>{h.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </main>
  );
} 