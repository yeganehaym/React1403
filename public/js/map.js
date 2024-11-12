function initMap() {

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: {lat: 33.9910, lng: 51.4235}
    });
  
    var pos = 
    {
        location: {lat: 33.9910, lng: 51.4235},
        image: '../images/marker.png'
    };
    


    var marker = new google.maps.Marker({
        position: pos.location,
        icon: pos.image,
        map: map
    });  

  }