import React from 'react';
import SearchCompany from './SearchCompany';
import CardLayout from './RecentCompanies/CardLayout';

const Content = ({ companies }) => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-900">Search Companies</h1>
            <SearchCompany />
            <h1 className="mt-4 text-2xl font-bold text-gray-900">Recent Companies</h1>
            <CardLayout />

        </div>
    );
};

export default Content;
