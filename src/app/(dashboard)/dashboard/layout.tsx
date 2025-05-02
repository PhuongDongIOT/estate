import { AppSidebar } from '@/components/layout/app-sidebar';
import Header from '@/components/layout/header';
import { Inter } from 'next/font/google';
// import Sidebar from '@/components/layout/sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import type { Metadata } from 'next';
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import ChatButton from './_components/chat-button';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next Shadcn Dashboard Starter',
  description: 'Basic dashboard with Next.js and Shadcn'
};

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      {/* <Sidebar /> */}
      <AppSidebar />
      <SidebarInset>
        <main className="w-full max-h-screen overflow-x-hidden overflow-y-scroll no-scrollbar">
          <Header />
          <NuqsAdapter>
            {children}
          </NuqsAdapter>
          <ChatButton />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
