// File location: formation/utils/util.js

// This function returns 12 randoms from the selected pakages after matching them to 
// the selected company type and selected package type.

/*params:
    selectedPackage: object - the selected package
    selectedCompanyType: string - the selected company type
    selectedPackageVar: object - all the features of the packages from another json file
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
