import { Link } from '@inertiajs/react';
import {
    LayoutGrid,
    UserPlus,
    Users,
    ClipboardList,
    CalendarCheck2,
    TrendingUp,
    AlertTriangle,
    FileBarChart2,
    FileSpreadsheet,
    UserCog,
    ShieldCheck,
} from 'lucide-react';

import AppLogo from '@/components/app-logo';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import type { NavItem } from '@/types';

const overviewNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },
];

const learnerNavItems: NavItem[] = [
    {
        title: 'Register Learner',
        href: dashboard(),
        icon: UserPlus,
    },
    {
        title: 'All Learners',
        href: dashboard(),
        icon: Users,
    },
];

const performanceNavItems: NavItem[] = [
    {
        title: 'FTL Scores',
        href: dashboard(),
        icon: ClipboardList,
    },
    {
        title: 'Attendance',
        href: dashboard(),
        icon: CalendarCheck2,
    },
    {
        title: 'Performance',
        href: dashboard(),
        icon: TrendingUp,
    },
    {
        title: 'At-risk Learners',
        href: dashboard(),
        icon: AlertTriangle,
    },
];

const reportsNavItems: NavItem[] = [
    {
        title: 'DepEd Reports',
        href: dashboard(),
        icon: FileBarChart2,
    },
    {
        title: 'Export Data',
        href: dashboard(),
        icon: FileSpreadsheet,
    },
];

const userManagementNavItems: NavItem[] = [
    {
        title: 'Manage Users',
        href: dashboard(),
        icon: UserCog,
    },
    {
        title: 'Roles & Permissions',
        href: dashboard(),
        icon: ShieldCheck,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={overviewNavItems} label="Overview" />
                <NavMain items={learnerNavItems} label="Learner Information" />
                <NavMain items={performanceNavItems} label="Performance Monitoring" />
                <NavMain items={reportsNavItems} label="Reports & Insights" />
                <NavMain items={userManagementNavItems} label="User Management" />
            </SidebarContent>

            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}