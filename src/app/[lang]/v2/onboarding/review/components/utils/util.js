export const checkFormElements = (name, lastname, email, street, city, country, zip, phone) => {
    let isFormValid = true;
    let missingFields = [];

    const isValidEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    };

    if (!isValidEmail(email)) {
        missingFields.push('valid email address');
        isFormValid = false;
    }

    if (!name.trim()) {
        missingFields.push('first name');
        isFormValid = false;
    }
    if (!lastname.trim()) {
        missingFields.push('last name');
        isFormValid = false;
    }
    if (!email.trim()) {
        missingFields.push('email address');
        isFormValid = false;
    }
    if (!street.trim()) {
        missingFields.push('street address');
        isFormValid = false;
    }
    
    if (!city.trim()) {
        missingFields.push('city');
        isFormValid = false;
    }
    if (!country.trim()) {
        missingFields.push('country');
        isFormValid = false;
    }
    if (!zip.trim()) {
        missingFields.push('zip code');
        isFormValid = false;
    }
    if (!phone.trim()) {
        missingFields.push('phone number');
        isFormValid = false;
    }

    return { isFormValid, missingFields };
}

export const isNumber = (input) => {
    return /^\d+$/.test(input);
};