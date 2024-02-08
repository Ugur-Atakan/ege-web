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
    { 
        name: 'Company Info', href: '/en/dashboard/company', icon: FolderIcon, current: false,
        adminVisibility: true,
        userVisibility: true,
        mainDashboardVisibility: false,
        customDashboardVisibility: false 
    },
    { 
        name: 'Companies', href: '/en/dashboard/companies', icon: FolderIcon, current: false,
        adminVisibility: true,
        userVisibility: true,
        mainDashboardVisibility: false,
        customDashboardVisibility: false 
    },
    { 
        name: 'Onboard Company', href: '/en/dashboard/onboarding', icon: FolderIcon, current: false,
        adminVisibility: false,
        userVisibility: false,
        mainDashboardVisibility: true,
        customDashboardVisibility: false 
    },
    { 
        name: 'Onboard Admin Company', href: '/en/dashboard/create-company', icon: FolderIcon, current: false,
        adminVisibility: true,
        userVisibility: false,
        mainDashboardVisibility: true,
        customDashboardVisibility: true 
    },
    { 
        name: 'Search Company', href: '/en/dashboard/search-companies', icon: FolderIcon, current: false,
        adminVisibility: true,
        userVisibility: false,
        mainDashboardVisibility: true,
        customDashboardVisibility: false  
    },
    {
        name: 'Products',
        href: '/en/dashboard/products',
        icon: ChartPieIcon,
        current: false,
        adminVisibility: true,
        userVisibility: true,
        mainDashboardVisibility: false,
        customDashboardVisibility: true,
        subNav: [
            { name: 'Compliance Reminder', href: '/en/dashboard/products/compliance-reminder', icon: DocumentDuplicateIcon, current: false },
            { name: 'Registered Agent', href: '/en/dashboard/products/registered-agent', icon: FolderIcon, current: false },
            { name: 'Certificate of Good Standing', href: '/en/dashboard/products/cofg', icon: FolderIcon, current: false },
        ]
    },
    {
        name: 'Billing',
        href: '/en/dashboard/billing',
        icon: UsersIcon,
        current: false,
        adminVisibility: true,
        userVisibility: true,
        mainDashboardVisibility: false,
        customDashboardVisibility: true,
    }
]


export const getSidebarNav = (pathName, userAccessLevel) => {
    const parts = pathName.split('/');
    const lastPart = parts.pop();
    const secondLastPart = parts.pop();

    const newNavigation = navigation.filter(nav => {
        // setting the visibility on bases of user level
        let userVisible = false;
        if (userAccessLevel === 'admin') {
            userVisible = nav.adminVisibility !== false;
        } else {
            userVisible = nav.userVisibility !== false;
        }
        
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
        //* for /products/compliance-reminder/:id etc
        if (secondLastPart == 'products') {
            if (nav.name.toLowerCase() === secondLastPart) {    
                nav.current = true
                nav.subNav.href = nav.subNav.map(subNav => {
                    if (!subNav.href.includes(lastPart))
                        subNav.href = subNav.href + '/' + lastPart;
                })
            } else {
                nav.current = false
            }
            
        }
        //* if last part is company UID e.g /dashboard/1234567890
        else if (lastPart !== nav.name.toLowerCase()){
            if (nav.name.toLowerCase() === secondLastPart) {    
                nav.current = true
            } else {
                nav.current = false
            } 
            // if (!nav.href.includes(lastPart)) nav.href = nav.href + '/' + lastPart;
        
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

export const userNavigation = [
    { name: 'Your profile', href: '/' },
    { 
        name: 'Sign out', 
        onClick: async () => {
            await signOut();
        }
    }
]