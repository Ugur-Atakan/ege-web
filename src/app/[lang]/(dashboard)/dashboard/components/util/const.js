import { ChartPieIcon, DocumentDuplicateIcon, FolderIcon, HomeIcon, UsersIcon, CalendarIcon, UserIcon } from '@heroicons/react/24/outline'
import { removeCookieFromStorageServerAction } from '@/app/lib/session/dashboardSession/serverActions'

export const navigation = [
    { name: 'Dashboard', href: '/en/dashboard/', icon: HomeIcon, current: true },
    { name: 'Company', href: '/en/dashboard/company', icon: FolderIcon, current: false, adminVisibility: false, userVisibility: true },
    { name: 'Companies', href: '/en/dashboard/companies', icon: FolderIcon, current: false, adminVisibility: true, userVisibility: false }
    // { name: 'Projects', href: '#', icon: UserIcon, current: false },
    // { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
    // { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
    // { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
]

export const getSidebarNav = (pathName, userAccessLevel) => {
    const parts = pathName.split('/');
    const lastPart = parts.pop();

    const newNavigation = navigation.filter(nav => {
        // Determine visibility based on userAccessLevel
        const isVisible = userAccessLevel === 'superadmin' ? nav.adminVisibility !== false : nav.userVisibility !== true;

        // Only include items that are visible to the user
        return isVisible;
    }).map(nav => {
        // Set 'current' based on the last part of the pathName
        if ((nav.name.toLowerCase().includes('/dashboard') && lastPart === '')) {
            nav.current = true;
        } else if (nav.name.toLowerCase() === lastPart) {
            nav.current = true
        } else {
            nav.current = false
        }
        return nav;
    });

    return newNavigation;
}

export const teams = [
    { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
    { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
    { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
]

export const userNavigation = [
    { name: 'Your profile', href: '/' },
    { 
        name: 'Sign out', 
        onClick: async (e) => {
            e.preventDefault();
            await removeCookieFromStorageServerAction();
            window.location.href = '/en/login';
        }
    }
]