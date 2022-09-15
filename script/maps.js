// function initMap()  {
//     const opt = 
//         center: {lat: 47.89794315203629, lng: 33.33144490029106},
    

//     const map = new google.maps.Map(
//         document.querySelector(".map__container") ,
//     {
//       zoom: 10,
//       center: opt,
//     }
//   );

//   const marker = new google.maps.Marker({
//     position: opt,
//     map: map,
//   });
// }

// window.initMap = initMap;
    

function initMap() {
    const cityMark = { lat: 47.89794315203629, lng: 33.33144490029106};
    const map = new google.maps.Map(document.getElementById("map__container"), {
      zoom: 10,
      center: cityMark,
    });
    const marker = new google.maps.Marker({
      position: cityMark,
      map: map,
    });
  }
  
  window.initMap = initMap;
