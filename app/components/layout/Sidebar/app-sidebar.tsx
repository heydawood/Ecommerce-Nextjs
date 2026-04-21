'use client';
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import SVG from 'react-inlinesvg';
//import { removeToken } from '@/Redux/Auth/Slice';
import { useEffect } from 'react';
//import Icon from '../ui/svg_icon/SvgIcon';
import { ApplicationPages, navItems } from './data';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { usePage } from '@/app/Providers/PageProvider';
import { useAppDispatch, useAppSelector } from '@/app/hooks/hooks';
import { useCustomAlert } from '../../common/CustomAlert';
import Image from 'next/image';
import LogoImage from '@/public/logo.webp';

const Logo = () => {
  return (
    <div className="flex gap-2 w-full py-1 items-center justify-start">
      <Link href="/" >
      <Image width={70} height={70} src={LogoImage} alt="Furnish logo" className=" object-cover" />
      </Link>
      <h2 className="font-bold text-primary-dark">Admin Portal</h2>
    </div>
  );
};

export function AppSidebar() {
  //const pathName = useLocation().pathname;
  const pathName = usePathname()
  //const dispatch = useAppDispatch();
  const router = useRouter();
  const showAlert = useCustomAlert();
  const { pageInfo, setPageInfo } = usePage();

  const logout = () => {
    showAlert({
      title: 'Logout',
      description: 'Are you sure you want to logout?',
      confirmText: 'Yes',
      cancelText: 'No',
      //customLogo: <Icon icon="/icons/logout.svg" />,
      logoClasses: 'bg-error-100 text-error',
      onConfirm: () => {
        //dispatch(removeToken()); //coming from the admin auth slice
        //navigate(routes.Login());
        router.push(routes.Login());
      },
      classNames: {
        confirmButton: 'hover:bg-error bg-error-25 text-error-800 hover:text-white rounded-xl',
        cancelButton: 'border border-neutral-975 bg-transparent hover:bg-primary hover:border-primary hover:text-white rounded-xl',
      },
    });
  };

  useEffect(() => {
    const pageMatch = navItems.find((item) => pathName.includes(item.link));
    if (pageMatch) {
      const page = ApplicationPages[pageMatch.pageName as keyof typeof ApplicationPages];
      if (page) {
        setPageInfo({ title: page.title, description: page.description });
      }
    }
  }, [pathName, setPageInfo]);

  return (
    <Sidebar className="border-sidebar-ring border-r-2 p-3 bg-sidebar-background">
      <SidebarHeader className="mb-4">
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title} className="group/item">
                  <SidebarMenuButton
                    isActive={pathName.includes(item.link)}
                    className={`flex items-center text-muted-dark h-[50px] px-4 py-0 rounded-xl ${pathName.includes(item.link) ? 'hover:bg-sidebar-accent' : 'hover:bg-sidebar-accent/50'}`}
                    asChild
                  >
                    <Link className="py-5 flex items-center" href={item.link}>
                      <SVG src={pathName.includes(item.link) ? item.iconActive : item.icon} style={{ width: '24px', height: '24px' }} />
                      <span className="text-sm">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="">
        <button onClick={logout} type="button" className="flex justify-start hover:bg-sidebar-hover items-center gap-2 !py-3 rounded-xl h-[50px] px-4">
          <SVG src={'/icons/logout.svg'} style={{ width: '24px', height: '24px' }} />
          <span className="text-sm">Logout</span>
        </button>
      </SidebarFooter>
    </Sidebar>
  );
}