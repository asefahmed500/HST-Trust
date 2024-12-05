// app/components/ClientLayout.tsx

'use client';

import { SessionProvider } from "next-auth/react"; // Client-side provider
import { ThemeProvider } from '@/components/theme-provider'; // Client-side provider

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </SessionProvider>
  );
}
