import React, { useEffect } from 'react';
import leaflet from 'leaflet';
import { HotelType, IAppState } from '../utils/types';
import { useSelector } from 'react-redux';
import { LAYER_FOR_MAP } from '../utils/constants';
import { useHistory } from 'react-router-dom';

interface IProps {
  hotels: HotelType[]
}

const Map = (props: IProps) => {
  const {hotels} = props;
  const activeFilter = useSelector<IAppState, string>(state => state.activeFilter);
  const filteredHotels = hotels.filter(hotel => hotel.city.name === activeFilter);
  const history = useHistory();

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

    leaflet.tileLayer(LAYER_FOR_MAP).addTo(map);

    filteredHotels.forEach((hotel) => {
      leaflet.marker([hotel.location.latitude, hotel.location.longitude], {icon}).on('click', () => {
        history.push(`/appartmens/${hotel.id}`);
      }).addTo(map);
    });

    return () => {
      map.remove();
    }
    
  }, [filteredHotels, history])

  return (
    <div id='map' style={{width: '100%'}}></div>
  )
}

export default Map;