const filterByHousingType = (ads, housingType) => {
  if (housingType === 'any') {
    return ads;
  }
  const filteredAds = ads.filter(ad => ad.offer.type === housingType);
  return filteredAds;
}

export { filterByHousingType };
