const countriesWithGoodRelationsEN = [
    'Turkey',
    'UK',
    'Canada',
    'Germany',
    'Japan',
    'Australia',
    'UAE',
    'France',
    'Italy',
    'India',
    'Brazil',
    'Singapore',
    'Spain',
    'Poland',
    'Sweden',
    'Norway',
    'Denmark',
    'Finland',
    'Switzerland',
    'Austria',
    'Greece',
    'Portugal',
    'Ireland',
    'Belgium',
    'Luxembourg',
    'Czech',
    'Hungary',
    'Romania',
    'Slovakia',
    'Slovenia',
    'Estonia',
    'Lithuania',
    'Azerbaijan',
];

const  countriesWithGoodRelationsTR = [
  'Türkiye',
  'Birleşik Krallık',
  'Kanada',
  'Almanya',
  'Japonya',
  'Avustralya',
  'Güney Kore',
  'İsrail',
  'Suudi Arabistan',
  'BAE',
  'Fransa',
  'İtalya',
  'Hollanda',
  'Hindistan',
  'Brezilya',
  'Güney Afrika',
  'Singapur',
  'Yeni Zelanda',
  'İspanya',
  'Polonya',
  'İsveç',
  'Norveç',
  'Danimarka',
  'Finlandiya',
  'İsviçre',
  'Avusturya',
  'Yunanistan',
  'Portekiz',
  'İrlanda',
  'Belçika',
  'Lüksemburg',
  'Çek Cumhuriyeti',
  'Macaristan',
  'Romanya',
  'Slovakya',
  'Slovenya',
  'Estonya',
  'Litvanya',
  'Azerbaycan',
];

  
// Function to get a random country from the array
export const getRandomCountry = (lang) => {
  if (lang === 'tr') {
    const randomIndex = Math.floor(Math.random() * countriesWithGoodRelationsTR.length);
    return countriesWithGoodRelationsTR[randomIndex];
  } else {
    const randomIndex = Math.floor(Math.random() * countriesWithGoodRelationsEN.length);
    return countriesWithGoodRelationsEN[randomIndex];
  }
};
  