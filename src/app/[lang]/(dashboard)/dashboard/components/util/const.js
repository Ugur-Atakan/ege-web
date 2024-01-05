import { ChartPieIcon, DocumentDuplicateIcon, FolderIcon, HomeIcon, UsersIcon, CalendarIcon, UserIcon } from '@heroicons/react/24/outline'
import { removeCookieFromStorageServerAction } from '@/app/lib/session/dashboardSession/serverActions'
import { signOut  } from 'next-auth/react'

export const navigation = [
    { 
        name: 'Dashboard', href: '/en/dashboard', icon: HomeIcon, current: true,  
        adminVisibility: true, 
        userVisibility: true, 
        mainDashboardVisibility: true,
        customDashboardVisibility: true 
    },
    // { 
    //     name: 'Home', href: '/en/dashboard', icon: HomeIcon, current: true,  
    //     adminVisibility: true, 
    //     userVisibility: true, 
    //     mainDashboardVisibility: true,
    //     customDashboardVisibility: true 
    // },
    { 
        name: 'Company Info', href: '/en/dashboard/company', icon: FolderIcon, current: false,
        adminVisibility: false,
        userVisibility: true,
        mainDashboardVisibility: false,
        customDashboardVisibility: true 
    },
    { 
        name: 'Companies', href: '/en/dashboard/companies', icon: FolderIcon, current: false,
        adminVisibility: true,
        userVisibility: true,
        mainDashboardVisibility: false,
        customDashboardVisibility: false 
    },
    { 
        name: 'Add new company', href: '/en/dashboard/onboarding', icon: FolderIcon, current: false,
        adminVisibility: true,
        userVisibility: true,
        mainDashboardVisibility: true,
        customDashboardVisibility: false 
    }
]


export const getSidebarNav = (pathName, userAccessLevel) => {
    const parts = pathName.split('/');
    const lastPart = parts.pop();
    const secondLastPart = parts.pop();

    const newNavigation = navigation.filter(nav => {
        const userVisible = userAccessLevel === 'admin' ? nav.adminVisibility !== true : nav.userVisibility !== false;

        //* Main dashboard visible
        if (secondLastPart == 'en' || secondLastPart == 'tr') {
            return userVisible && nav.mainDashboardVisibility;
        }
        //* Custom dashboard visible
        else {
            if (lastPart == 'onboarding') {
                return userVisible && nav.mainDashboardVisibility && nav.customDashboardVisibility;
            }
            return userVisible && nav.customDashboardVisibility;
        }
       
    }).map(nav => {
        //* if last part is company UID e.g /dashboard/1234567890
        if (lastPart !== nav.name.toLowerCase()){
            if (nav.name.toLowerCase() === secondLastPart) {    
                nav.current = true
            } else {
                nav.current = false
            } 
            if (!nav.href.includes(lastPart)) nav.href = nav.href + '/' + lastPart;
        } else { //* else works if someone is on main dashboard WITHOUT /dashboard/:id
            if (nav.name.toLowerCase() === lastPart) {    
                nav.current = true
            } else {
                nav.current = false
            }
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
        onClick: async () => {
            await signOut();
        }
    }
]