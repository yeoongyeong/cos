// Initialize and add the map
function initMap() {
    // The location of Uluru
    const cosOfficial = { lat: 51.537351089161824, lng: -0.12614868821756323 };
    // The map, centered at cosOfficial
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: cosOfficial,
      mapId: 'd1d59c55a65cfbb6'
    });
    // The marker, positioned at cosOfficial
    const marker = new google.maps.Marker({
      position: cosOfficial,
      map: map,
    });
  }
  
  window.initMap = initMap;