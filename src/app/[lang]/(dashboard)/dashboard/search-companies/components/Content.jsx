import React from 'react';
import SearchCompany from './SearchCompany';
import CardLayout from './RecentCompanies/CardLayout';

const Content = ({ lang, companies }) => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-900">Search Companies</h1>
            <SearchCompany />
            <h1 className="mt-4 text-2xl font-bold text-gray-900">Recent Companies</h1>
            <CardLayout lang={lang} companies={companies} />
        </div>
    );
};

export default Content;
