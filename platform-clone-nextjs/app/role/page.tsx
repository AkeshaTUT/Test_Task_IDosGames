'use client';

import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const fakeRoles = [
  { id: '1', name: 'Admin', description: 'Администратор' },
  { id: '2', name: 'Manager', description: 'Менеджер' },
  { id: '3', name: 'User', description: 'Пользователь' },
  { id: '4', name: 'Operator', description: 'Оператор' },
  { id: '5', name: 'Support', description: 'Саппорт' },
];

const PAGE_SIZE = 2;

export default function RolePage() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const filtered = fakeRoles.filter(r => r.name.toLowerCase().includes(search.toLowerCase()));
  const pageCount = Math.ceil(filtered.length / PAGE_SIZE);
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <main style={{ padding: 32 }}>
      <h1>Roles Listing</h1>
      <input
        type="text"
        placeholder="Поиск по роли..."
        value={search}
        onChange={e => { setSearch(e.target.value); setPage(1); }}
        style={{
          margin: '16px 0', padding: '8px 16px', borderRadius: 6, border: '1px solid #ddd', width: 300,
          fontSize: 16, outline: 'none', boxShadow: '0 1px 2px rgba(0,0,0,0.02)'
        }}
      />
      <Card style={{ marginTop: 8 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#f5f5f5' }}>
              <th style={{ padding: 8, border: '1px solid #eee' }}>ID</th>
              <th style={{ padding: 8, border: '1px solid #eee' }}>Name</th>
              <th style={{ padding: 8, border: '1px solid #eee' }}>Description</th>
              <th style={{ padding: 8, border: '1px solid #eee' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {paged.map((role) => (
              <tr key={role.id}>
                <td style={{ padding: 8, border: '1px solid #eee' }}>{role.id}</td>
                <td style={{ padding: 8, border: '1px solid #eee' }}>{role.name}</td>
                <td style={{ padding: 8, border: '1px solid #eee' }}>{role.description}</td>
                <td style={{ padding: 8, border: '1px solid #eee' }}>
                  <Link href={`/role/${role.id}`}>
                    <Button variant="primary" size="sm">Подробнее</Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ display: 'flex', gap: 8, margin: '16px 0', justifyContent: 'center' }}>
          <Button size="sm" variant="secondary" onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>Назад</Button>
          {Array.from({ length: pageCount }, (_, i) => (
            <Button key={i} size="sm" variant={page === i + 1 ? 'primary' : 'secondary'} onClick={() => setPage(i + 1)}>{i + 1}</Button>
          ))}
          <Button size="sm" variant="secondary" onClick={() => setPage(p => Math.min(pageCount, p + 1))} disabled={page === pageCount}>Вперёд</Button>
        </div>
      </Card>
    </main>
  );
} 