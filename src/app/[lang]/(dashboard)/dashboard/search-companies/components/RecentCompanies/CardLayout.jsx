import React from 'react';
import Card from './Card';

const CardLayout = ({ lang, companies }) => {
    return (
        <div className="flex flex-wrap justify-start">
            {companies.map((company, index) => (
                <Card key={index} id={company.id} lang={lang} title={company.companyName} description={company.companyPackage} />
            ))}
        </div>
    );
};

export default CardLayout;
