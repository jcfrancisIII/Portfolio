import React, { Component } from 'react';

class Map extends Component {

  constructor(props) {
    super(props);
    this.rbtn = React.createRef()
    this.onScriptLoad = this.onScriptLoad.bind(this)
    this.showRestaurants = this.showRestaurants.bind(this)
  }

  onScriptLoad() {
    const map = new window.google.maps.Map(
      document.getElementById(this.props.id),
      this.props.options);
    this.props.onMapLoad(map)
    this.rbtn.current.addEventListener('click', () => {
      this.showRestaurants(map)
    });
  }

  componentDidMount() {
    if (!window.google) {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = `https://maps.google.com/maps/api/js?key=AIzaSyC3EqJwVyTb_ShBdwZRTR_eC2yOWreIrZM`;
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
      // wait til the script loads
      s.addEventListener('load', e => {
        this.onScriptLoad()
      })
    } else {
      this.onScriptLoad()
    }
  }

  showRestaurants(map) {
    var image = {
      url: 'https://static.thenounproject.com/png/10897-200.png',
      size: new window.google.maps.Size(200, 200),
      origin: new window.google.maps.Point(0, 0),
      anchor: new window.google.maps.Point(12, 15),
      scaledSize: new window.google.maps.Size(24, 24)
    }
    var marker2 = new window.google.maps.Marker({
      position: { lat: 32.9833173, lng: -96.8898287 },
      map: map,
      title: 'Sabu\'s',
      icon: image,
      zIndex: 1
    });
  }

  render() {
    return (
      <div className="Map-main">
        <button ref={this.rbtn}>My Favorite Restaurant</button>
        <div style={{ width: 500, height: 500 }} id={this.props.id} />
      </div>
    );
  }
}

export default Map;

/* Example
<div className="Map">
  <Map
    id="myMap"
    options={{
      center: { lat: 32.9704269, lng: -96.887855 },
      zoom: 13
    }}
    onMapLoad={map => {
      var marker = new window.google.maps.Marker({
        position: { lat: 32.9704269, lng: -96.887855 },
        map: map,
        title: 'Hello Istanbul!'
      });
    }}
  />
</div>
*/