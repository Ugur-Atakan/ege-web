import React from 'react'

/**
 * @param {object} selectedPackage - the selected package
 * @param {string} selectedCompanyType - the selected company type
 * @param {object} selectedPackageVar - all the features of the packages from another json file
 * @returns {array} - 12 random features from the selected package
*/

export const getRandomPackages = (selectedPackage, selectedCompanyType, selectedPackageVar) => {
    let packageName = selectedPackage.orderPackage.toLowerCase().replace(' ', '');
    packageName = packageName.includes('registatellc') ? packageName.replace('registatellc ', '') : packageName;
    console.log(packageName)

    const selectedPackageFeatures = selectedPackageVar[selectedCompanyType].map(
        (item) => (
            item.features.map((feature) => (
                 feature[packageName] ? feature.title : null
            ))
        )
    )
   
    const filteredFeatures = selectedPackageFeatures.map((item) => item.filter((feature) => feature !== null));
    const singleArr = filteredFeatures.reduce((acc, val) => acc.concat(val), []);
    const randomFeatures = singleArr.sort(() => Math.random() - Math.random()).slice(0, 12);

    return randomFeatures;
}
