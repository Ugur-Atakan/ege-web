import React from 'react';
import Card from './Card';

const CompanyCards = ({ lang, companies }) => {
    return (
        <div className="flex flex-wrap justify-center">
            {companies.map((company, index) => (
                <>
                    <Card key={index} id={company._id} lang={lang} title={company.companyName} description={company.companyPackage} />
                </>
            ))}
        </div>
    );
};

export default CompanyCards;
