import React, { useEffect } from 'react';
import leaflet from 'leaflet';
import { HotelType, IAppState } from '../utils/types';
import { useSelector } from 'react-redux';

interface IProps {
  hotels: HotelType[]
}

const Map = (props: IProps) => {
  const {hotels} = props;
  const activeFilter = useSelector<IAppState, string>(state => state.activeFilter);
  const filteredHotels = hotels.filter(hotel => hotel.city.name === activeFilter);

  useEffect(() => {
    const city: leaflet.LatLngTuple = [filteredHotels[0].city.location.latitude, filteredHotels[0].city.location.longitude];
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const zoom = 12;
    const map = leaflet.map(`map`, {
      center: city,
      zoom: zoom,
      zoomControl: false,
    });

    map.setView(city, zoom);

    leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, { 
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      }).addTo(map);

    filteredHotels.forEach((hotel) => {
      leaflet.marker([hotel.location.latitude, hotel.location.longitude], {icon}).on('click', () => {
        document.location.href = `/appartmens/${hotel.id}`
      }).addTo(map);
    });

    return () => {
      map.remove();
    }
    
  }, [filteredHotels])

  return (
    <div id='map' style={{width: '100%'}}></div>
  )
}

export default Map;