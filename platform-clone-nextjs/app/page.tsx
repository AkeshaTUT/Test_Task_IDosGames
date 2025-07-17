import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={{ padding: 32 }}>
      <h1>Dashboard / Builder</h1>
      <ul>
        <li><Link href="/permission">Permissions</Link></li>
        <li><Link href="/role">Roles</Link></li>
        <li><Link href="/user">Users</Link></li>
      </ul>
    </main>
  );
} 