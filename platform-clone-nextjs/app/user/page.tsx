'use client';

import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const fakeUsers = [
  { id: '1', name: 'Иван Иванов', email: 'ivanov@example.com' },
  { id: '2', name: 'Петр Петров', email: 'petrov@example.com' },
  { id: '3', name: 'Сидор Сидоров', email: 'sidorov@example.com' },
  { id: '4', name: 'Анна Смирнова', email: 'anna@example.com' },
  { id: '5', name: 'Мария Кузнецова', email: 'maria@example.com' },
];

const PAGE_SIZE = 2;

export default function UserPage() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const filtered = fakeUsers.filter(u => u.name.toLowerCase().includes(search.toLowerCase()));
  const pageCount = Math.ceil(filtered.length / PAGE_SIZE);
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <main style={{ padding: 32 }}>
      <h1>Users Listing</h1>
      <input
        type="text"
        placeholder="Поиск по имени..."
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
              <th style={{ padding: 8, border: '1px solid #eee' }}>Email</th>
              <th style={{ padding: 8, border: '1px solid #eee' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {paged.map((user) => (
              <tr key={user.id}>
                <td style={{ padding: 8, border: '1px solid #eee' }}>{user.id}</td>
                <td style={{ padding: 8, border: '1px solid #eee' }}>{user.name}</td>
                <td style={{ padding: 8, border: '1px solid #eee' }}>{user.email}</td>
                <td style={{ padding: 8, border: '1px solid #eee' }}>
                  <Link href={`/user/${user.id}`}>
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