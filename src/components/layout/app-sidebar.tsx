"use client"

import * as React from "react"
import {
    AudioWaveform,
    BookOpen,
    Bot,
    Command,
    Frame,
    GalleryVerticalEnd,
    Map,
    PieChart,
    Settings2,
    SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/organims/nav-main"
import { NavProjects } from "@/components/organims/nav-projects"
import { NavUser } from "@/components/organims/nav-user"
import { TeamSwitcher } from "@/components/molecules/team-switcher"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar"

const data = {
    user: {
        name: 'shadcn',
        email: 'm@example.com',
        avatar: '/avatars/shadcn.jpg',
    },
    teams: [
        {
            name: 'Acme Inc',
            logo: GalleryVerticalEnd,
            plan: 'Enterprise',
        },
        {
            name: 'Acme Corp.',
            logo: AudioWaveform,
            plan: 'Startup',
        },
        {
            name: 'Evil Corp.',
            logo: Command,
            plan: 'Free',
        },
    ],
    navMain: [
        {
            title: 'Dashboard',
            url: '/dashboard',
            icon: SquareTerminal,
            isActive: true,
        },
        {
            title: 'Course',
            url: '/dashboard/course',
            icon: SquareTerminal,
            isActive: true,
        },
        {
            title: 'Mail',
            url: '/dashboard/mail',
            icon: SquareTerminal,
            isActive: true,
        },
        {
            title: 'Document',
            url: '/dashboard/document',
            icon: SquareTerminal,
            isActive: true,
        },
        {
            title: 'Employee',
            url: '/dashboard/employee',
            icon: SquareTerminal,
            isActive: true,
        },
        {
            title: 'Customer',
            url: '/dashboard/customer',
            icon: SquareTerminal,
            isActive: true,
        },
        {
            title: 'Blog',
            url: '/dashboard/blog',
            icon: SquareTerminal,
            isActive: true,
        },
        {
            title: 'Schedule',
            url: '/dashboard/schedule',
            icon: SquareTerminal,
            isActive: true,
        },
        {
            title: 'Product',
            url: '/dashboard/product',
            icon: SquareTerminal,
            isActive: true,
        },
        {
            title: 'Order',
            url: '/dashboard/order',
            icon: SquareTerminal,
            isActive: true,
        },
        {
            title: 'Sell',
            url: '/dashboard/sell',
            icon: SquareTerminal,
            isActive: true,
        },
        {
            title: 'Debt',
            url: '/dashboard/debt',
            icon: SquareTerminal,
            isActive: true,
        },
        {
            title: 'Kanban',
            url: '/dashboard/kanban',
            icon: SquareTerminal,
            isActive: true,
        },
        {
            title: 'Social',
            url: '/dashboard/social',
            icon: SquareTerminal,
            isActive: true,
        },
        {
            title: 'Chat',
            url: '/dashboard/chat',
            icon: SquareTerminal,
            isActive: true,
        },
        {
            title: 'Profile',
            url: '/dashboard/profile',
            icon: SquareTerminal,
            isActive: true,
        },
        {
            title: 'Setting',
            url: '/dashboard/setting',
            icon: SquareTerminal,
            isActive: true,
        },
        {
            title: 'Models',
            url: '/dashboard/models',
            icon: Bot,
            items: [
                { title: 'Genesis', url: '#' },
                { title: 'Explorer', url: '#' },
                { title: 'Quantum', url: '#' },
            ],
        },
        {
            title: 'Documentation',
            url: '/dashboard/documentation',
            icon: BookOpen,
            items: [
                { title: 'Introduction', url: '#' },
                { title: 'Get Started', url: '#' },
                { title: 'Tutorials', url: '#' },
                { title: 'Changelog', url: '#' },
            ],
        },
        {
            title: 'Settings',
            url: '/dashboard/settings',
            icon: Settings2,
            items: [
                { title: 'General', url: '#' },
                { title: 'Team', url: '#' },
                { title: 'Billing', url: '#' },
                { title: 'Limits', url: '#' },
            ],
        },
    ],
    projects: [
        {
            name: 'Design Engineering',
            url: '#',
            icon: Frame,
        },
        {
            name: 'Sales & Marketing',
            url: '#',
            icon: PieChart,
        },
        {
            name: 'Travel',
            url: '#',
            icon: Map,
        },
    ],
};


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <TeamSwitcher teams={data.teams} />
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
                <NavProjects projects={data.projects} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
