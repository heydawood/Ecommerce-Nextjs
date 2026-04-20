import { PageName } from "@/app/Utils/Constants";


export const navItems: INavItem[] = [

  {
    title: 'Orders',
    link: '/orders',
    icon: '/icons/orders.svg',
    iconActive: '/icons/orders-active.svg',
    pageName: PageName.ORDERS,
  },
  {
    title: 'Add Products',
    link: '/addProducts',
    icon: '/icons/teacher.svg',
    iconActive: '/icons/teacher-active.svg',
    pageName: PageName.ADD_PRODUCTS,
  },
  {
    title: 'All Products',
    link: '/allProducts',
    icon: '/icons/student.svg',
    iconActive: '/icons/student-active.svg',
    pageName: PageName.ALL_PRODUCTS,
  },


];

export const ApplicationPages = {

  settings: {
    title: 'Settings',
    description: 'Here you can see all of the settings of platform.',
  },
  
  admins: {
    title: 'Admins Page',
    description: 'Here you can manage and see details of all Admins.',
  },
  teachers: {
    title: 'Teachers Page',
    description: 'Here you can manage and see details of all Teachers.',
  },
  students: {
    title: 'Students Page',
    description: 'Here you can manage and see details of all Students.',
  },
  academicYears: {
    title: 'Academic Years Page',
    description: 'Here you can manage and see details of all Academic Years.',
  },
  academicTerms: {
    title: 'Academic Terms Page',
    description: 'Here you can manage and see details of all Academic Terms.',
  },
  classLevels: {
    title: 'Class Levels Page',
    description: 'Here you can manage and see details of all Class Levels.',
  },
  programs: {
    title: 'Programs Page',
    description: 'Here you can manage and see details of all Programs.',
  },
  subjects: {
    title: 'Subjects Page',
    description: 'Here you can manage and see details of all Subjects.',
  },
  yearGroups: {
    title: 'Year Groups Page',
    description: 'Here you can manage and see details of all Year Groups.',
  },
  results: {
    title: 'Results Page',
    description: 'Here you can manage and see details of all Results.',
  },
};