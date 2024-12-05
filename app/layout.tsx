// app/layout.tsx

import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ClientLayout from '@/components/ClientLayout'; // Import the client layout

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Hossain Sharif Talukdar Ad-Deen Foundation',
  description: 'Contributing to society through religious places and Deen principles',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ClientLayout>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ClientLayout>
      </body>
    </html>
  );
}
