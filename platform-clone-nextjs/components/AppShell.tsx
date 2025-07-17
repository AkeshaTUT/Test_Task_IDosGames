'use client';

import { ReactNode, Suspense, useState, useEffect } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export function AppShell({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 900);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div className={cn('antialiased flex h-full text-base text-foreground bg-background', inter.className)}>
      <div style={{ display: 'flex', height: '100vh' }}>
        {isMobile ? (
          <Sidebar mobile open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        ) : (
          <Sidebar />
        )}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <header style={{ height: 56, background: '#fff', borderBottom: '1px solid #eee', display: 'flex', alignItems: 'center', padding: '0 24px', fontWeight: 500, justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              {isMobile && (
                <button onClick={() => setSidebarOpen(true)} style={{ background: 'none', border: 'none', padding: 0, marginRight: 12, cursor: 'pointer' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24"><rect y="4" width="24" height="2" rx="1" fill="#009ef7"/><rect y="11" width="24" height="2" rx="1" fill="#009ef7"/><rect y="18" width="24" height="2" rx="1" fill="#009ef7"/></svg>
                </button>
              )}
              <span>Тестовое задание</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
              {/* Notification Icon */}
              <div style={{ position: 'relative', cursor: 'pointer' }} title="Уведомления">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M12 22a2 2 0 0 0 2-2H10a2 2 0 0 0 2 2zm6-6V11c0-3.07-1.63-5.64-5-6.32V4a1 1 0 1 0-2 0v.68C7.63 5.36 6 7.92 6 11v5l-1.29 1.29A1 1 0 0 0 6 19h12a1 1 0 0 0 .71-1.71L18 16z" fill="#009ef7"/></svg>
                <span style={{ position: 'absolute', top: 2, right: 2, background: '#f00', color: '#fff', borderRadius: '50%', fontSize: 10, width: 16, height: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>3</span>
              </div>
              {/* User Avatar */}
              <div style={{ position: 'relative' }}>
                <img src="https://ui-avatars.com/api/?name=User&background=009ef7&color=fff&size=32" alt="User" style={{ width: 32, height: 32, borderRadius: '50%', cursor: 'pointer', border: '2px solid #009ef7' }} />
              </div>
            </div>
          </header>
          <main style={{ flex: 1, overflow: 'auto' }}>
            <Suspense>{children}</Suspense>
          </main>
        </div>
      </div>
      <Toaster />
    </div>
  );
} 