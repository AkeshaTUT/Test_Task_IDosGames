import { ReactNode } from 'react';
import { SettingsProvider } from '@/providers/settings-provider';
import { TooltipsProvider } from '@/providers/tooltips-provider';
import { I18nProvider } from '@/providers/i18n-provider';
import { ModulesProvider } from '@/providers/modules-provider';
import { QueryProvider } from '@/providers/query-provider';
import { ThemeProvider } from '@/providers/theme-provider';
import { AppShell } from '@/components/AppShell';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Metronic',
    default: 'Metronic',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className="h-full" suppressHydrationWarning>
      <body className={inter.className}>
        <QueryProvider>
          <SettingsProvider>
            <ThemeProvider>
              <I18nProvider>
                <TooltipsProvider>
                  <ModulesProvider>
                    <AppShell>{children}</AppShell>
                  </ModulesProvider>
                </TooltipsProvider>
              </I18nProvider>
            </ThemeProvider>
          </SettingsProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
