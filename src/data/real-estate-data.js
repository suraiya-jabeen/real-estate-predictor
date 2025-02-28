

const data = [
  { area: 1360, bedrooms: 2, bathrooms: 1, location: 'Downtown', age: 1, price: 764 },
  { area: 4272, bedrooms: 2, bathrooms: 3, location: 'Rural', age: 47, price: 673 },
  { area: 3592, bedrooms: 4, bathrooms: 2, location: 'Downtown', age: 34, price: 1051 },
    { area: 966, bedrooms: 5, bathrooms: 1, location: 'Rural', age: 32, price: 462 },
    { area: 4926, bedrooms: 3, bathrooms: 3, location: 'Suburban', age: 48, price: 936 },
    { area: 3944, bedrooms: 1, bathrooms: 1, location: 'Downtown', age: 25, price: 924 },
    { area: 3671, bedrooms: 4, bathrooms: 1, location: 'Suburban', age: 40, price: 817 },
    { area: 3419, bedrooms: 5, bathrooms: 2, location: 'Rural', age: 45, price: 711 },
    { area: 630, bedrooms: 4, bathrooms: 3, location: 'Suburban', age: 1, price: 651 },
    { area: 2185, bedrooms: 5, bathrooms: 3, location: 'Suburban', age: 16, price: 826 },
    { area: 1269, bedrooms: 5, bathrooms: 2, location: 'Rural', age: 39, price: 508 },
    { area: 2891, bedrooms: 3, bathrooms: 2, location: 'Suburban', age: 5, price: 789 },
    { area: 2933, bedrooms: 5, bathrooms: 3, location: 'Suburban', age: 22, price: 889 },
    { area: 1684, bedrooms: 4, bathrooms: 3, location: 'Rural', age: 29, price: 550 },
    { area: 3885, bedrooms: 5, bathrooms: 2, location: 'Suburban', age: 3, price: 992 },
    { area: 4617, bedrooms: 3, bathrooms: 1, location: 'Rural', age: 12, price: 767 },
    { area: 3404, bedrooms: 3, bathrooms: 1, location: 'Suburban', age: 26, price: 768 },
    { area: 974, bedrooms: 4, bathrooms: 2, location: 'Rural', age: 16, price: 475 },
    { area: 1582, bedrooms: 2, bathrooms: 1, location: 'Rural', age: 37, price: 364 },
    { area: 3058, bedrooms: 2, bathrooms: 2, location: 'Suburban', age: 22, price: 721 },
    { area: 2547, bedrooms: 5, bathrooms: 1, location: 'Suburban', age: 29, price: 776 },
    { area: 3247, bedrooms: 1, bathrooms: 1, location: 'Suburban', age: 14, price: 676 },
    { area: 1475, bedrooms: 5, bathrooms: 3, location: 'Downtown', age: 28, price: 931 },
    { area: 2306, bedrooms: 4, bathrooms: 3, location: 'Downtown', age: 5, price: 1010 },
    { area: 689, bedrooms: 4, bathrooms: 1, location: 'Downtown', age: 47, price: 704 },
    { area: 3234, bedrooms: 4, bathrooms: 1, location: 'Rural', age: 49, price: 605 },
    { area: 3505, bedrooms: 4, bathrooms: 3, location: 'Suburban', age: 30, price: 880 },
    { area: 2399, bedrooms: 4, bathrooms: 3, location: 'Rural', age: 46, price: 587 },
    { area: 1767, bedrooms: 3, bathrooms: 3, location: 'Downtown', age: 5, price: 906 },
    { area: 2028, bedrooms: 2, bathrooms: 2, location: 'Suburban', age: 12, price: 638 },
    { area: 3702, bedrooms: 4, bathrooms: 1, location: 'Rural', age: 16, price: 718 },
    { area: 4056, bedrooms: 1, bathrooms: 3, location: 'Suburban', age: 26, price: 793 },
    { area: 4390, bedrooms: 1, bathrooms: 1, location: 'Rural', age: 26, price: 617 },
    { area: 1146, bedrooms: 1, bathrooms: 2, location: 'Suburban', age: 48, price: 428 },
    { area: 3388, bedrooms: 1, bathrooms: 2, location: 'Downtown', age: 21, price: 906 },
    { area: 2935, bedrooms: 3, bathrooms: 3, location: 'Downtown', age: 39, price: 955 },
    { area: 1100, bedrooms: 1, bathrooms: 2, location: 'Suburban', age: 36, price: 448 },
    { area: 2863, bedrooms: 4, bathrooms: 1, location: 'Rural', age: 33, price: 600 },
    { area: 2561, bedrooms: 5, bathrooms: 3, location: 'Downtown', age: 30, price: 1036 },
    { area: 741, bedrooms: 1, bathrooms: 1, location: 'Downtown', age: 37, price: 580 },
    { area: 2541, bedrooms: 3, bathrooms: 1, location: 'Downtown', age: 23, price: 888 },
    { area: 3324, bedrooms: 3, bathrooms: 2, location: 'Suburban', age: 10, price: 822 },
    { area: 3112, bedrooms: 1, bathrooms: 2, location: 'Downtown', age: 5, price: 711 },
    { area: 1863, bedrooms: 5, bathrooms: 2, location: 'Rural', age: 36, price: 574 },
    { area: 1978, bedrooms: 1, bathrooms: 2, location: 'Rural', age: 34, price: 389 },
    { area: 3056, bedrooms: 3, bathrooms: 2, location: 'Rural', age: 31, price: 603 },
    { area: 1275, bedrooms: 2, bathrooms: 3, location: 'Suburban', age: 10, price: 597 },
    { area: 4514, bedrooms: 4, bathrooms: 1, location: 'Suburban', age: 19, price: 943 },
    { area: 534, bedrooms: 3, bathrooms: 1, location: 'Rural', age: 32, price: 319 },
    { area: 3652, bedrooms: 1, bathrooms: 1, location: 'Rural', age: 1, price: 593 },
    { area: 2455, bedrooms: 4, bathrooms: 1, location: 'Suburban', age: 5, price: 765 },
    { area: 2085, bedrooms: 1, bathrooms: 2, location: 'Rural', age: 45, price: 378 },
    { area: 4443, bedrooms: 1, bathrooms: 1, location: 'Downtown', age: 4, price: 1016 },
    { area: 3573, bedrooms: 2, bathrooms: 3, location: 'Suburban', age: 16, price: 815 },
    { area: 1521, bedrooms: 4, bathrooms: 3, location: 'Rural', age: 24, price: 544 },
    { area: 3961, bedrooms: 4, bathrooms: 1, location: 'Suburban', age: 16, price: 894 },
    { area: 3113, bedrooms: 2, bathrooms: 1, location: 'Downtown', age: 2, price: 937 },
    { area: 4343, bedrooms: 3, bathrooms: 3, location: 'Suburban', age: 49, price: 876 },
    { area: 2000, bedrooms: 1, bathrooms: 3, location: 'Suburban', age: 28, price: 584 },
    { area: 661, bedrooms: 5, bathrooms: 2, location: 'Suburban', age: 32, price: 612 },
    { area: 4797, bedrooms: 1, bathrooms: 3, location: 'Suburban', age: 27, price: 865 },
    { area: 2481, bedrooms: 1, bathrooms: 2, location: 'Downtown', age: 20, price: 818 },
    { area: 1495, bedrooms: 3, bathrooms: 2, location: 'Suburban', age: 24, price: 611 },
    { area: 3842, bedrooms: 1, bathrooms: 2, location: 'Suburban', age: 12, price: 770 },
    { area: 4298, bedrooms: 2, bathrooms: 2, location: 'Rural', age: 35, price: 669 },
    { area: 1775, bedrooms: 2, bathrooms: 2, location: 'Suburban', age: 33, price: 571 },
    { area: 1516, bedrooms: 4, bathrooms: 1, location: 'Rural', age: 33, price: 465},
    { area: 837, bedrooms: 5, bathrooms: 3, location: 'Downtown', age: 43, price: 837 },
    { area: 1378, bedrooms: 1, bathrooms: 2, location: 'Downtown', age: 37, price: 673 },
    { area: 1576, bedrooms: 1, bathrooms: 3, location: 'Downtown', age: 12, price: 773 },
    { area: 4493, bedrooms: 3, bathrooms: 3, location: 'Downtown', age: 3, price: 1183 },
    { area: 879, bedrooms: 2, bathrooms: 2, location: 'Rural', age: 1, price: 395 },
    { area: 992, bedrooms: 5, bathrooms: 1, location: 'Suburban', age: 33, price: 613 },
    { area: 2562, bedrooms: 4, bathrooms: 2, location: 'Downtown', age: 40, price: 936 },
    { area: 4384, bedrooms: 2, bathrooms: 1, location: 'Suburban', age: 10, price: 848 },
    { area: 564, bedrooms: 4, bathrooms: 3, location: 'Rural', age: 43, price: 410 },
    { area: 3068, bedrooms: 3, bathrooms: 1, location: 'Rural', age: 44, price: 548 },
    { area: 2527, bedrooms: 3, bathrooms: 1, location: 'Rural', age: 29, price: 524 },
    { area: 3195, bedrooms: 1, bathrooms: 1, location: 'Downtown', age: 13, price: 873 },
    { area: 1995, bedrooms: 5, bathrooms: 3, location: 'Suburban', age: 12, price: 815 },
    { area: 891, bedrooms: 4, bathrooms: 3, location: 'Suburban', age: 31, price: 617 },
    { area: 4974, bedrooms: 2, bathrooms: 1, location: 'Suburban', age: 46, price: 835 },
    { area: 4061, bedrooms: 3, bathrooms: 1, location: 'Rural', age: 2, price: 732 },
    { area: 2778, bedrooms: 1, bathrooms: 2, location: 'Downtown', age: 35, price: 817 },
    { area: 3559, bedrooms: 1, bathrooms: 1, location: 'Rural', age: 23, price: 543 },
    { area: 700, bedrooms: 4, bathrooms: 2, location: 'Rural', age: 17, price: 446 },
    { area: 3604, bedrooms: 3, bathrooms: 1, location: 'Suburban', age: 26, price: 788 },
    { area: 2954, bedrooms: 5, bathrooms: 2, location: 'Rural', age: 8, price: 739 },
    { area: 4145, bedrooms: 3, bathrooms: 3, location: 'Suburban', age: 29, price: 896 },
    { area: 1304, bedrooms: 4, bathrooms: 1, location: 'Downtown', age: 26, price: 808 },
    { area: 3231, bedrooms: 4, bathrooms: 1, location: 'Suburban', age: 10, price: 833 },
    { area: 3273, bedrooms: 3, bathrooms: 1, location: 'Downtown', age: 26, price: 955 },
    { area: 2070, bedrooms: 4, bathrooms: 1, location: 'Suburban', age: 34, price: 669 },
    { area: 3190, bedrooms: 3, bathrooms: 2, location: 'Rural', age: 41, price: 597 },
    { area: 4340, bedrooms: 2, bathrooms: 1, location: 'Rural', age: 7, price: 700 },
    { area: 1528, bedrooms: 3, bathrooms: 3, location: 'Downtown', age: 4, price: 884 },
    { area: 1002, bedrooms: 3, bathrooms: 3, location: 'Downtown', age: 45, price: 750 },
    { area: 4993, bedrooms: 4, bathrooms: 1, location: 'Downtown', age: 11, price: 1207 },
    { area: 1370, bedrooms: 4, bathrooms: 3, location: 'Suburban', age: 29, price: 669 },
    { area: 4988, bedrooms: 1, bathrooms: 1, location: 'Suburban', age: 36, price: 806 },
    
  // Add all your dataset entries here
];

// Normalize function for values
export const normalize = (value, min, max) => (value - min) / (max - min);

// Encode location with one-hot encoding
export const encodeLocation = (location) => {
  const encoded = [0, 0, 0]; // Initialize the encoded array
  if (location === 'Downtown') encoded[0] = 1;
  if (location === 'Rural') encoded[1] = 1;
  if (location === 'Suburban') encoded[2] = 1;
  return encoded;
};

// Normalizing values for the dataset
export const areaMin = Math.min(...data.map(item => item.area));
export const areaMax = Math.max(...data.map(item => item.area));
export const priceMin = Math.min(...data.map(item => item.price));
export const priceMax = Math.max(...data.map(item => item.price));

// Process the data for neural network
export const processedData = data.map(item => {
  const normalizedArea = normalize(item.area, areaMin, areaMax);
  const normalizedBedrooms = normalize(item.bedrooms, 1, 5);
  const normalizedBathrooms = normalize(item.bathrooms, 1, 3);
  const encodedLocation = encodeLocation(item.location);
  const normalizedAge = normalize(item.age, 1, 50);

  return {
    input: [
      normalizedArea,
      normalizedBedrooms,
      normalizedBathrooms,
      ...encodedLocation, // 3 values for location (Downtown, Rural, Suburban)
      normalizedAge
    ],
    output: [normalize(item.price, priceMin, priceMax)] // Normalizing price
  };
});