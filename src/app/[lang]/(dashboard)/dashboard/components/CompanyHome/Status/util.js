
export const attachments = [
    { name: 'resume_back_end_developer.pdf', size: '2.4mb' },
    { name: 'coverletter_back_end_developer.pdf', size: '4.5mb' },
    { name: 'references.pdf', size: '1.2mb' },
];

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
