"use client";
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const fakeRole = {
  id: '1',
  name: 'Admin',
  description: 'Администратор',
  users: ['Иван Иванов', 'Анна Смирнова'],
  permissions: ['View Dashboard', 'Edit Users', 'Manage Roles'],
  history: [
    { date: '2024-07-01', action: 'Создана роль' },
    { date: '2024-07-02', action: 'Добавлен пользователь' },
  ],
};

const TABS = [
  { key: 'info', label: 'Инфо' },
  { key: 'users', label: 'Пользователи' },
  { key: 'permissions', label: 'Права' },
  { key: 'history', label: 'История' },
];

export default function RoleDetailClient({ id }: { id: string }) {
  const [tab, setTab] = useState('info');
  // В реальном проекте данные роли подгружаются по id
  return (
    <main style={{ padding: 32 }}>
      <h1>Детали роли</h1>
      <div style={{ display: 'flex', gap: 12, margin: '24px 0' }}>
        {TABS.map(t => (
          <Button key={t.key} variant={tab === t.key ? 'primary' : 'secondary'} size="sm" onClick={() => setTab(t.key)}>
            {t.label}
          </Button>
        ))}
      </div>
      <Card style={{ padding: 24, minHeight: 200 }}>
        {tab === 'info' && (
          <div>
            <h2 style={{ marginBottom: 16 }}>Информация о роли</h2>
            <div><b>ID:</b> {id}</div>
            <div><b>Название:</b> {fakeRole.name}</div>
            <div><b>Описание:</b> {fakeRole.description}</div>
          </div>
        )}
        {tab === 'users' && (
          <div>
            <h2 style={{ marginBottom: 16 }}>Пользователи с этой ролью</h2>
            <ul>
              {fakeRole.users.map(u => <li key={u}>{u}</li>)}
            </ul>
          </div>
        )}
        {tab === 'permissions' && (
          <div>
            <h2 style={{ marginBottom: 16 }}>Права роли</h2>
            <ul>
              {fakeRole.permissions.map(p => <li key={p}>{p}</li>)}
            </ul>
          </div>
        )}
        {tab === 'history' && (
          <div>
            <h2 style={{ marginBottom: 16 }}>История изменений</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#f5f5f5' }}>
                  <th style={{ padding: 8, border: '1px solid #eee' }}>Дата</th>
                  <th style={{ padding: 8, border: '1px solid #eee' }}>Действие</th>
                </tr>
              </thead>
              <tbody>
                {fakeRole.history.map((h, i) => (
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