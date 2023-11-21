// Util.js contains utility functions that are used throughout the application.

export const redirect = (url, lang) => {
    if (typeof window !== 'undefined' && window.location)
        window.location.href = `/${lang}/${url}`;
}

export const localStorageDataExists = () => {
    const companyState = (typeof window !== 'undefined') ? localStorage.getItem('companyState') : '';
    const companyName = (typeof window !== 'undefined') ? localStorage.getItem('companyName') : '';
    const companyPackage = (typeof window !== 'undefined') ? localStorage.getItem('selectedPackage') : '';
   
    if (companyState || companyName || companyPackage) {
        return true;
    } else {
        return false;
    }
}


// This function is used to redirect to the last funnel link used by the user
// it checks for the not null value and returns a string to redirect to that page
export const redirectToLastNotNullFunnelLink = () => {
    const companyState = (typeof window !== 'undefined') ? localStorage.getItem('companyState') : null;
    const companyName = (typeof window !== 'undefined') ? localStorage.getItem('companyName') : null;
    const companyPackage = (typeof window !== 'undefined') ? localStorage.getItem('selectedPackage') : null;
   
    if (companyName != null) {
        return 'company-name';
    } else if (companyPackage != null) {
        return 'formation';
    } else if (companyState != null) {  
        return 'state';
    } 
}

// This function is used to redirects to the last Null funnel link returns a string to redirect to that page
export const redirectToLastNullInternalFunnel = () => {
    const companyType = (typeof window !== 'undefined') ? localStorage.getItem('companyType') : null;
    const companyState = (typeof window !== 'undefined') ? localStorage.getItem('companyStateCompleted') : null;
    const companyName = (typeof window !== 'undefined') ? localStorage.getItem('companyNameCompleted') : null;
    const companyPackage = (typeof window !== 'undefined') ? localStorage.getItem('companyFormationCompleted') : null;
   
    if (companyType == null) {
        return '/';
    } else if (companyState == null) {
        return 'state';
    }  else if (companyPackage == null) {
        return 'formation';
    } else if (companyName == null) {
        return 'company-name';
    } else {
        return null;
    }
}

// This function checks if the path name match or not
export const checkEqualPathName = (path, checkPath) => {
    const parts = path.split('/'); // Split the path by '/'
    const lastSegment = parts.pop() || ''; // Get the last part or return an empty string if there's none

    const isEqual = lastSegment === checkPath;
    return isEqual;     
}

export const clearPathnameLocalStorage = (pathname) => {
    if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.removeItem(pathname);
    }
}

export const completelyClearLocalStorage = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.removeItem('companyType');
        window.localStorage.removeItem('companyState');
        window.localStorage.removeItem('companyStateCompleted');
        window.localStorage.removeItem('companyNameCompleted');
        window.localStorage.removeItem('companyFormationCompleted');
        window.localStorage.removeItem('companyName');
        window.localStorage.removeItem('selectedPackage');
    }
}