import { PageName } from "@/app/Utils/Constants";
import { INavItem } from "@/app/Utils/Sidebar";


export const navItems: INavItem[] = [

  {
    title: 'Orders',
    link: '/admin/orders',
    icon: '/icons/orders.svg',
    iconActive: '/icons/orders-active.svg',
    pageName: PageName.ORDERS,
  },
  {
    title: 'All Products',
    link: '/admin/allProducts',
    icon: '/icons/student.svg',
    iconActive: '/icons/student-active.svg',
    pageName: PageName.ALL_PRODUCTS,
  },
  {
    title: 'Add Products',
    link: '/admin/addProducts',
    icon: '/icons/teacher.svg',
    iconActive: '/icons/teacher-active.svg',
    pageName: PageName.ADD_PRODUCTS,
  },

];

export const ApplicationPages = {

  orders: {
    title: 'Orders',
    description: 'Here you can see all of the Orders.',
  },
  
  allProducts: {
    title: 'All Products',
    description: 'Here you can manage and see details of All Products.',
  },

  addProducts: {
    title: 'Add Products',
    description: 'Here you can manage and Add Products.',
  },

};