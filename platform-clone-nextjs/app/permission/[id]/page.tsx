"use client";
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const fakePermission = {
  id: '1',
  name: 'View Dashboard',
  description: 'Доступ к дашборду',
  roles: ['Admin', 'Manager'],
  users: ['Иван Иванов', 'Петр Петров'],
  history: [
    { date: '2024-07-01', action: 'Создано право' },
    { date: '2024-07-03', action: 'Добавлен пользователь' },
  ],
};

const TABS = [
  { key: 'info', label: 'Инфо' },
  { key: 'roles', label: 'Роли' },
  { key: 'users', label: 'Пользователи' },
  { key: 'history', label: 'История' },
];

export default function PermissionDetailPage({ params }: { params: { id: string } }) {
  const [tab, setTab] = useState('info');
  // В реальном проекте данные права подгружаются по params.id
  return (
    <main style={{ padding: 32 }}>
      <h1>Детали права</h1>
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
            <h2 style={{ marginBottom: 16 }}>Информация о праве</h2>
            <div><b>ID:</b> {fakePermission.id}</div>
            <div><b>Название:</b> {fakePermission.name}</div>
            <div><b>Описание:</b> {fakePermission.description}</div>
          </div>
        )}
        {tab === 'roles' && (
          <div>
            <h2 style={{ marginBottom: 16 }}>Роли с этим правом</h2>
            <ul>
              {fakePermission.roles.map(r => <li key={r}>{r}</li>)}
            </ul>
          </div>
        )}
        {tab === 'users' && (
          <div>
            <h2 style={{ marginBottom: 16 }}>Пользователи с этим правом</h2>
            <ul>
              {fakePermission.users.map(u => <li key={u}>{u}</li>)}
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
                {fakePermission.history.map((h, i) => (
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