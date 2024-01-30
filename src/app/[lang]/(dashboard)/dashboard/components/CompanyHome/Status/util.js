
export const getFileUploadList = (companyID) => {
    return [
    { 
        name: 'Certificate of incorporation - Incorporation',
        fileName: `certificate_of_incorporation_${companyID}.pdf`,
    },
    {
        name: 'Statement of incorporator - Incorporation',
        fileName: `statement_of_incorporator_${companyID}.pdf`,
    },
    {
        name: 'Office address agreement -  Add-on',
        fileName: `office_address_agreement_${companyID}.pdf`,
    },
    {
        name: 'Certificate of good standing - Add-on',
        fileName: `certificate_of_good_standing_${companyID}.pdf`,
    },
    {
        name: 'Certificate of formation - LLC',
        fileName: `certificate_of_formation_${companyID}.pdf`,
    },
    {
        name: 'Certificate of Formation - Gold',    
        fileName: `certificate_of_formation_${companyID}.pdf`,
    },
    {
        name: 'Operation agreement - Gold',
        fileName: `operation_agreement_${companyID}.pdf`,
    },
    {
        name: 'IRS Letter - EIN',
        fileName: `irs_letter_${companyID}.pdf`,
    },
    {
        name: 'EFTPS Letter - EIN',
        fileName: `eftps_letter_${companyID}.pdf`,
    }]
};

export const attachments = [
    { name: 'resume_back_end_developer.pdf', size: '2.4mb' },
    { name: 'coverletter_back_end_developer.pdf', size: '4.5mb' },
    { name: 'references.pdf', size: '1.2mb' },
];

export const getAttachments = (documents) => {
    return documents.map((doc) => {
        return {
            name: doc,
        }
    })
}

export const getCompanyDetails = (company) => {
    let status;
    if (company.status == 'active') status = '🟢 Active';
    if (company.status == 'payment-pending') status = '🟡 Payment Pending';
    if (company.status == 'inprogress') status = '🟡 In Progress';
    if (company.status == 'paid') status = '🟢 Paid';
    if (company.status == 'inactive') status = '🔴 Inactive';
    if (company.status == 'rejected') status = '🔴 Disapproved';

    return [
        { label: 'Status', value: status, dbLabel: 'status' },
        { label: 'Company Name', value: company.companyName, dbLabel: 'companyName' },
        { label: 'Company Type', value: company.companyType, dbLabel: 'companyType' },
        { label: 'Company Package', value: company.companyPackage, dbLabel: 'companyPackage' },
        { label: 'Company State', value: company.state, dbLabel: 'state' },
    ]
}
