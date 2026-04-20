import React from 'react'
import { AppSidebar } from '../components/layout/Sidebar/app-sidebar';
import { AlertDialogProvider } from '../components/common/CustomAlert';
import { SidebarProvider } from '@/components/ui/sidebar';
import { PageProvider } from '../Providers/PageProvider';

const layout = ({ children }: { children: React.ReactNode; role: string | null; }) => {

  
  return (
    <div className="flex">
      <AlertDialogProvider>

        <SidebarProvider defaultOpen={true}>
          <PageProvider>


          <AppSidebar />
          <main className="flex-1 p-6">{children}</main>

          </PageProvider>
          
        </SidebarProvider>

      </AlertDialogProvider>

    </div>
  )
}

export default layout