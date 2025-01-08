import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import Asidebar from './dashboard/_components/Asidebar';

export default function MainLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <Asidebar />
      <SidebarInset>
        <main className="w-full">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
