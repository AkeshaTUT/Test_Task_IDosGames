'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const menu = [
  {
    section: 'ОСНОВНОЕ',
    items: [
      {
        label: 'Dashboard',
        href: '/',
        icon: (
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" fill="#009ef7"/></svg>
        ),
      },
      {
        label: 'Billing',
        href: '/billing',
        icon: (
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M21 7V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v1m18 0v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7m18 0H3" stroke="#009ef7" strokeWidth="2"/></svg>
        ),
      },
    ],
  },
  {
    section: 'НАСТРОЙКИ',
    items: [
      {
        label: 'Settings',
        icon: (
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M19.14 12.936a7.5 7.5 0 0 0 0-1.872l2.036-1.58a.5.5 0 0 0 .12-.638l-1.928-3.34a.5.5 0 0 0-.602-.22l-2.4.96a7.5 7.5 0 0 0-1.62-.936l-.36-2.52A.5.5 0 0 0 14 2h-4a.5.5 0 0 0-.496.42l-.36 2.52a7.5 7.5 0 0 0-1.62.936l-2.4-.96a.5.5 0 0 0-.602.22l-1.928 3.34a.5.5 0 0 0 .12.638l2.036 1.58a7.5 7.5 0 0 0 0 1.872l-2.036 1.58a.5.5 0 0 0-.12.638l1.928 3.34a.5.5 0 0 0 .602.22l2.4-.96a7.5 7.5 0 0 0 1.62.936l.36 2.52A.5.5 0 0 0 10 22h4a.5.5 0 0 0 .496-.42l.36-2.52a7.5 7.5 0 0 0 1.62-.936l2.4.96a.5.5 0 0 0 .602-.22l1.928-3.34a.5.5 0 0 0-.12-.638l-2.036-1.58zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" fill="#009ef7"/></svg>
        ),
        children: [
          { label: 'Publishing Data', href: '/settings/publishing' },
          { label: 'Platform Settings', href: '/settings/config' },
          { label: 'Secret Key', href: '/settings/secret-key' },
          { label: 'IAP', href: '/settings/iap' },
          { label: 'Crypto', href: '/settings/crypto' },
          { label: 'Email', href: '/settings/email' },
          { label: 'AI Services', href: '/settings/ai' },
          { label: 'Integrations', href: '/settings/integrations' },
          { label: 'Other Settings', href: '/settings/other-settings' },
        ],
      },
    ],
  },
  {
    section: 'LIVEOPS',
    items: [
      { label: 'Title Config', href: '/liveops/title-config', icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5L2 7v10l10 5 10-5V7l-10 2.5z" fill="#009ef7"/></svg> },
      { label: 'Title Data', href: '/liveops/title-data', icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-7 14H7v-2h5v2zm5-4H7v-2h10v2zm0-4H7V7h10v2z" fill="#009ef7"/></svg> },
      { label: 'Users', href: '/user', icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#009ef7"/></svg> },
      { label: 'Catalogs', href: '/liveops/catalogs', icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M3 6v6a9 9 0 0 0 18 0V6" stroke="#009ef7" strokeWidth="2"/></svg> },
      { label: 'Currency', href: '/liveops/currency', icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 21c4.97 0 9-4.03 9-9V6H3v6c0 4.97 4.03 9 9 9z" fill="#009ef7"/></svg> },
      { label: 'Shop', href: '/liveops/shop', icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M16 6V4a4 4 0 0 0-8 0v2H3v2h18V6h-5zm-6 0V4a2 2 0 0 1 4 0v2h-4zm-1 4v10a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V10H9z" fill="#009ef7"/></svg> },
    ],
  },
  {
    section: 'ПРАВА И РОЛИ',
    items: [
      { label: 'Users', href: '/user', icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#009ef7"/></svg> },
      { label: 'Roles', href: '/role', icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="#009ef7"/></svg> },
      { label: 'Permissions', href: '/permission', icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm6-2a6 6 0 1 1-12 0 6 6 0 0 1 12 0z" fill="#009ef7"/></svg> },
    ],
  },
];

export function Sidebar({ mobile, open, onClose }: { mobile?: boolean; open?: boolean; onClose?: () => void }) {
  const pathname = usePathname();
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});

  const handleToggle = (label: string) => {
    setOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  // Закрывать sidebar по клику вне (на мобильных)
  useEffect(() => {
    if (!mobile || !open) return;
    const handler = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('.sidebar-mobile')) return;
      onClose && onClose();
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [mobile, open, onClose]);

  return (
    <>
      {/* Overlay for mobile */}
      {mobile && open && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.2)', zIndex: 99 }} onClick={onClose} />
      )}
      <aside
        className={mobile ? 'sidebar-mobile' : ''}
        style={{
          width: 260,
          background: '#f8f9fa',
          padding: 24,
          borderRight: '1px solid #eee',
          height: '100vh',
          overflowY: 'auto',
          position: mobile ? 'fixed' : 'relative',
          left: mobile ? (open ? 0 : -280) : 0,
          top: 0,
          zIndex: 100,
          transition: 'left 0.2s',
          boxShadow: mobile && open ? '2px 0 8px rgba(0,0,0,0.08)' : undefined,
        }}
      >
        {menu.map((section) => (
          <div key={section.section} style={{ marginBottom: 32 }}>
            <div style={{ fontSize: 12, color: '#888', textTransform: 'uppercase', marginBottom: 12, letterSpacing: 1 }}>{section.section}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {section.items.map((item) => (
                <li key={item.label} style={{ marginBottom: 8 }}>
                  {item.children ? (
                    <>
                      <div
                        onClick={() => handleToggle(item.label)}
                        style={{
                          display: 'flex', alignItems: 'center', gap: 12, padding: '8px 12px', borderRadius: 6,
                          color: '#222', fontWeight: 500, cursor: 'pointer', userSelect: 'none',
                          background: openMenus[item.label] ? '#e6f4fd' : 'transparent',
                          transition: 'background 0.2s',
                        }}
                      >
                        <span>{item.icon}</span>
                        <span>{item.label}</span>
                        <span style={{ marginLeft: 'auto', fontSize: 14 }}>{openMenus[item.label] ? '▲' : '▼'}</span>
                      </div>
                      {openMenus[item.label] && (
                        <ul style={{ listStyle: 'none', padding: 0, margin: '8px 0 0 24px' }}>
                          {item.children.map((child) => (
                            <li key={child.href} style={{ marginBottom: 6 }}>
                              <Link href={child.href} style={{
                                display: 'flex', alignItems: 'center', gap: 8, padding: '6px 12px', borderRadius: 5,
                                color: pathname === child.href ? '#fff' : '#222',
                                background: pathname === child.href ? '#009ef7' : 'transparent',
                                fontWeight: 500, textDecoration: 'none', fontSize: 15,
                              }}>
                                <span>{child.label}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link href={item.href} style={{
                      display: 'flex', alignItems: 'center', gap: 12, padding: '8px 12px', borderRadius: 6,
                      color: pathname === item.href ? '#fff' : '#222',
                      background: pathname === item.href ? '#009ef7' : 'transparent',
                      fontWeight: 500, textDecoration: 'none',
                      transition: 'background 0.2s',
                    }}>
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>
    </>
  );
} 