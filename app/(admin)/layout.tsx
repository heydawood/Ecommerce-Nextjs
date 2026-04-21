import React from 'react'
import { AppSidebar } from '../components/layout/Sidebar/app-sidebar';
import { AlertDialogProvider } from '../components/common/CustomAlert';
import { SidebarProvider } from '@/components/ui/sidebar';
import { PageProvider } from '../Providers/PageProvider';
import Header from '../components/layout/Header/Header';

  export const metadata = {
  title: 'Admin Portal | Furnish',
  description: 'Furnish Admin Portal.',
};

const layout = ({ children }: { children: React.ReactNode; role: string | null; }) => {



  
  return (
    <div className="flex">
      <AlertDialogProvider>

        <SidebarProvider defaultOpen={true}>
          <PageProvider>


          <AppSidebar />
          <div className="flex flex-1 flex-col overflow-hidden">

          <Header/>
          <main className="flex-1 px-6 py-4 bg-neutral-25">{children}</main>
          </div>

          </PageProvider>
          
        </SidebarProvider>

      </AlertDialogProvider>

    </div>
  )
}

export default layout