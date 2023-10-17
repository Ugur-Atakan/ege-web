// Util.js contains utility functions that are used throughout the application.

export const redirect = (url, lang) => {
    if (typeof window !== 'undefined' && window.location)
        window.location.href = `/${lang}/${url}`;
}