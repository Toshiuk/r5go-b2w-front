class LocationHandler {
  static setLocationStore(locationStore) {
    localStorage.setItem("locationStore", locationStore);
  }

  static isLocationStore() {
    return localStorage.getItem("locationStore") === "true";
  }
}

export default LocationHandler;
