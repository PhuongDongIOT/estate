import { NavItem } from '@/types';

export type User = {
  id: number;
  name: string;
  company: string;
  role: string;
  verified: boolean;
  status: string;
};
export const users: User[] = [
  {
    id: 1,
    name: 'Candice Schiner',
    company: 'Dell',
    role: 'Frontend Developer',
    verified: false,
    status: 'Active'
  },
  {
    id: 2,
    name: 'John Doe',
    company: 'TechCorp',
    role: 'Backend Developer',
    verified: true,
    status: 'Active'
  },
  {
    id: 3,
    name: 'Alice Johnson',
    company: 'WebTech',
    role: 'UI Designer',
    verified: true,
    status: 'Active'
  },
  {
    id: 4,
    name: 'David Smith',
    company: 'Innovate Inc.',
    role: 'Fullstack Developer',
    verified: false,
    status: 'Inactive'
  },
  {
    id: 5,
    name: 'Emma Wilson',
    company: 'TechGuru',
    role: 'Product Manager',
    verified: true,
    status: 'Active'
  },
  {
    id: 6,
    name: 'James Brown',
    company: 'CodeGenius',
    role: 'QA Engineer',
    verified: false,
    status: 'Active'
  },
  {
    id: 7,
    name: 'Laura White',
    company: 'SoftWorks',
    role: 'UX Designer',
    verified: true,
    status: 'Active'
  },
  {
    id: 8,
    name: 'Michael Lee',
    company: 'DevCraft',
    role: 'DevOps Engineer',
    verified: false,
    status: 'Active'
  },
  {
    id: 9,
    name: 'Olivia Green',
    company: 'WebSolutions',
    role: 'Frontend Developer',
    verified: true,
    status: 'Active'
  },
  {
    id: 10,
    name: 'Robert Taylor',
    company: 'DataTech',
    role: 'Data Analyst',
    verified: false,
    status: 'Active'
  }
];

export type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  date_of_birth: string; // Consider using a proper date type if possible
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  longitude?: number; // Optional field
  latitude?: number; // Optional field
  job: string;
  profile_picture?: string | null; // Profile picture can be a string (URL) or null (if no picture)
};

export type Product = {
  photo_url: string;
  name: string;
  description: string;
  created_at: string;
  price: number;
  id: number;
  category: string;
  updated_at: string;
};

export const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: 'dashboard',
    label: 'Dashboard'
  },
  {
    title: 'Course',
    href: '/dashboard/course',
    icon: 'course',
    label: 'course'
  },
  {
    title: 'Mail',
    href: '/dashboard/mail',
    icon: 'envelopeClosed',
    label: 'mail'
  },
  {
    title: 'Document',
    href: '/dashboard/document',
    icon: 'blog',
    label: 'document'
  },
  {
    title: 'Employee',
    href: '/dashboard/employee',
    icon: 'user',
    label: 'employee'
  }, 
  {
    title: 'Customer',
    href: '/dashboard/customer',
    icon: 'github',
    label: 'customer'
  },
  {
    title: 'Blog',
    href: '/dashboard/blog',
    icon: 'infomation',
    label: 'blog'
  },  
  {
    title: 'Schedule',
    href: '/dashboard/schedule',
    icon: 'calender',
    label: 'schedule'
  },
  {
    title: 'Product',
    href: '/dashboard/product',
    icon: 'product',
    label: 'product'
  },
  {
    title: 'Order',
    href: '/dashboard/order',
    icon: 'order',
    label: 'order'
  }, {
    title: 'Sell',
    href: '/dashboard/sell',
    icon: 'fileText',
    label: 'sell'
  },
  {
    title: 'Debt',
    href: '/dashboard/debt',
    icon: 'mix',
    label: 'debt'
  },
  {
    title: 'Kanban',
    href: '/dashboard/kanban',
    icon: 'kanban',
    label: 'kanban'
  }, 
  {
    title: 'Social',
    href: '/dashboard/social',
    icon: 'social',
    label: 'social'
  },   
  {
    title: 'Chat',
    href: '/dashboard/chat',
    icon: 'chat',
    label: 'chat'
  },   
  {
    title: 'Profile',
    href: '/dashboard/profile',
    icon: 'userPen',
    label: 'profile'
  },
  {
    title: 'Setting',
    href: '/dashboard/setting',
    icon: 'setting',
    label: 'setting'
  },
  {
    title: 'Logout',
    href: '/',
    icon: 'login',
    label: 'logout'
  }
];
